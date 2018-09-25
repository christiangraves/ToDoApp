//Import express and set it up

const express = require('express');
const path = require('path');

const app = express();

//Define PORT for server listening
const PORT = 3000;

//Setup server to parse request request body for usage
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

//Routes

require('./routes/toDoRoutes.js')(app);

//Starts sever for predefined PORT Number
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`);
})