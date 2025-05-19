const express = require('express');
const bodyParser = require('body-parser');
const environment = require('dotenv');
const cors = require('cors');
const dbConfig = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const jwt = require('jsonwebtoken');

const app = express();


environment.config();
dbConfig.run();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use('/api/user', userRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
