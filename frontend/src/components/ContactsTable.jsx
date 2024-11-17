import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import axios from 'axios';
import EditContactForm from './EditContactForm';

const ContactsTable = ({ fetchContacts, contacts }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortField, setSortField] = useState('firstName');
    const [sortOrder, setSortOrder] = useState('asc');
    const [editContact, setEditContact] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/contacts/${id}`);
        fetchContacts();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSortFieldChange = (event) => {
        setSortField(event.target.value);
        setPage(0);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
        setPage(0);
    };

    const handleEditClick = (contact) => {
        setEditContact(contact);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setEditContact(null);
    };

    const sortedContacts = [...contacts].sort((a, b) => {
        const aValue = a[sortField].toLowerCase();
        const bValue = b[sortField].toLowerCase();

        if (sortOrder === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
    });

    return (
        <>
            <FormControl variant="outlined" style={{ margin: '16px 0' }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortField} onChange={handleSortFieldChange}>
                    <MenuItem value="firstName">Name</MenuItem>
                    <MenuItem value="company">Company</MenuItem>
                    <MenuItem value="jobTitle">Job Title</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" style={{ margin: '16px 0' }}>
                <InputLabel>Order</InputLabel>
                <Select value={sortOrder} onChange={handleSortOrderChange}>
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedContacts
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((contact) => (
                                <TableRow key={contact._id}>
                                    <TableCell>{contact.firstName}</TableCell>
                                    <TableCell>{contact.lastName}</TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.phone}</TableCell>
                                    <TableCell>{contact.company}</TableCell>
                                    <TableCell>{contact.jobTitle}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleEditClick(contact)} color="primary">Edit</Button>
                                        <Button onClick={() => handleDelete(contact._id)} color="secondary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={sortedContacts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Contact</DialogTitle>
                <DialogContent>
                    {editContact && (
                        <EditContactForm
                            contact={editContact}
                            fetchContacts={fetchContacts}
                            onClose={handleCloseEditDialog}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ContactsTable;