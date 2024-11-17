import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ fetchContacts }) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contacts', contact);
            fetchContacts();
            setContact({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                jobTitle: '',
            });
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={contact.firstName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={contact.lastName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Company"
                        name="company"
                        value={contact.company}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Job Title"
                        name="jobTitle"
                        value={contact.jobTitle}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Add Contact
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ContactForm;