const express = require('express')
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const PostsRoutes = require('./routes/PostsRoutes');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/posts' , PostsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// db connection

mongoose.connect(process.env.DB_CONNECTION).then(() => console.log('DB connected')).catch((error) => console.log(error));