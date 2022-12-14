const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema =  require('./schema/schema.js');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db.js');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`server running Bro, its on ${port.blue.bold}`));

