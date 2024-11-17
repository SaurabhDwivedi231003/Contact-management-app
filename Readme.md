# Contact Management CRM


## Live Demo
You can access the live Application at: [Contact Management CRM](https://contact-management-app-iaqf.onrender.com/)

## Overview
This project implements a Contact Management feature for a CRM system, allowing users to add, view, update, and delete contact information.

## Technologies Used
- **Frontend**: React, Vite, Material UI  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  

## Setup Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.  
- Ensure you have [MongoDB](https://www.mongodb.com/) set up and running, or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  

---

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd Contact-management-app/backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder with your MongoDB URI. The `.env` file should look like this:
   ```plaintext
   MONGODB_URI=your_mongodb_uri_here
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
   The backend server should now be running. You can access it at `http://localhost:5000` (or the port specified in your code).

---

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm run dev
   ```
   The frontend application should now be running. You can access it at `http://localhost:3000` (or the port specified in your code).

## Live Demo
You can access Backend of the Application at: [Contact Management CRM Backend](https://contact-management-app-iaqf.onrender.com/)
