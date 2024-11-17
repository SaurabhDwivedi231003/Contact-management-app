import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm.jsx';
import ContactsTable from './components/ContactsTable.jsx';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);
    };
 
    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Contact Management
            </Typography>
            <ContactForm fetchContacts={fetchContacts} />
            <ContactsTable contacts={contacts} fetchContacts={fetchContacts} />
        </Container>
    );
};

export default App;