// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express(); 

/*dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
 app.listen(port,listening);
function listening(){
    console.log("server running")
    console.log(`running on localhost:${port}`);
}


// Initialize all route with a callback function
app.get('/all', callBack);

// Callback function to complete GET '/all'
function callBack (req, res) {
    res.send(projectData);
 }
 
 
//post route
app.post('/add', addData) ;
function addData(request, response) {
    projectData['date'] = request.body.date;
    projectData['temp'] = request.body.temp;
    projectData['feel'] = request.body.feel;
    response.send(projectData);
    
};

