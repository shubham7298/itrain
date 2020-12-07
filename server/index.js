const path = require('path');
const express = require('express');

const cors = require('cors');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, '_static')));

app.get('ppt', (req,res) => {
    res.send('cool!!!');
})

const PORT = 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port 5000`
  )
);