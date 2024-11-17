import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const EditContactForm = ({ contact, fetchContacts, onClose }) => {
    const [updatedContact, setUpdatedContact] = useState(contact);

    useEffect(() => {
        setUpdatedContact(contact);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact({ ...updatedContact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/contacts/${updatedContact._id}`, updatedContact);
            fetchContacts();
            onClose(); // Close the edit form after submission
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={updatedContact.firstName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={updatedContact.lastName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={updatedContact.email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={updatedContact.phone}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Company"
                        name="company"
                        value={updatedContact.company}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Job Title"
                        name="jobTitle"
                        value={updatedContact.jobTitle}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Update Contact
                    </Button>
                    <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '8px' }}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EditContactForm;