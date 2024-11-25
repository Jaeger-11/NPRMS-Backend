require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/connect');
const identityRoutes = require('./routes/identityRoutes');
const officerRoutes = require('./routes/officerRoutes');

app.use(express.json());
// app.use(helmet());
app.use(cors());
// app.use(xss());

app.get('/', (req, res) => {
    res.send('<h1>NPRMS Backend Application</h1>')
})

app.use('/identities', identityRoutes);
app.use('/officers', officerRoutes);


const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, console.log(`Server is running on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start();