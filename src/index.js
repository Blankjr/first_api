const express = require('express');
const api_helper = require('./API_helper');
const path = require('path');

const app = express();

app.get('/', (req, res) =>
    res.json({ message: '/help for information regarding the possibilities 🏍' })
);
app.get('/help', (req, res) => { res.sendFile(path.join(__dirname + '/static/help.html')); });


const port = process.env.PORT || 8080;

//* Route to the boredapi API call to a REST API Endpoint 
app.get('/suggestion/activity', (req, res) => {
    api_helper.make_API_call('http://www.boredapi.com/api/activity/')
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))