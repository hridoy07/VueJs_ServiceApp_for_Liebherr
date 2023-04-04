const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//const dotenv = require('dotenv');
const home=require('./routs/home.js')
const passport = require('passport');
//dotenv.config();

//const config=require('./config.json');


//initialize the app
const app = express();
//midlewwares



//form data midleware
app.use('/',home);
app.use(bodyParser.urlencoded({
    extended: false
}));

//json body midleware
app.use(bodyParser.json());

//cors midleware
app.use(cors());

//setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));


//bringing in the database config and connect with the database
const db =require('./config/keys').mongoURl;

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(`Database Connected Successfully ${db}`)
}).catch(err =>{
    console.log('Unable to connect with database ${err}')
});






//bring the users route
const users = require('./routs/users');
app.use ('/api/users', users);

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log (`Server started on port ${PORT}`);
})


