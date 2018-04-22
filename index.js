const express = require('express');
require('dotenv').config({ path: 'variables.env' });
const app = express();
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');
const routes = require('./routes/router');
const portNumber = 3001;


// Setting up View Egine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', pug);
// Setting up static resources
app.use(express.static(path.join(__dirname, 'public')));

// Turning raw requests into usable properties into req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', routes);

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is listening on port no ${portNumber}`)
});




