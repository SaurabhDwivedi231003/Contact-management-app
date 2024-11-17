const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /contacts
router.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    try {
        const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET /contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT /contacts/:id
router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /contacts/:id
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;