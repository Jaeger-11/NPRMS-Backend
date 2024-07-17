require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./database/connect');
const identityRoutes = require('./routes/identityRoutes');
const Identity = require('./models/Identity');
const identities = require('./data')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>NPRMS Backend Application</h1>')
})

app.use('/identity', identityRoutes);


const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        // await Identity.create(identities)
        app.listen(PORT, console.log(`Server is running on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start();