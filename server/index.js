import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js'; // Ensure the file extension is included
import Router from './routes/Route.js';


dotenv.config(); // Initialize dotenv to load environment variables
const app = express();
const PORT = 8000;

app.use(cors());  
app.use('/', Router);

app.listen(PORT, () => console.log(`Server started successfully, running on Port: ${PORT}`));


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
console.log('USERNAME:', USERNAME);
console.log('PASSWORD:', PASSWORD);

Connection(USERNAME, PASSWORD); 
