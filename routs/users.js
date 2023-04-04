const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys').secret;
const passport = require('passport');
const User = require('../model/User');


//@route POST api/users/register
//@desc Register the user 
//@access public
/*router.get('/register', function (req, res) {
    res.send('Wiki home page');
  })*/


router.post('/register',(req,res)=>{
    let {
        name,
        username,
        email,
        password,
        confirm_password
    }=req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "password do not match"
        });
    }

    //check for the uniq username
    User.findOne({
        username:username
    }).then(user=>{
        if(user){
            return res.status(400).json({
                msg: "Username is already taken"
            });
        }
    })

    //check for the uniq email
    User.findOne ({
        email:email 
    }).then(user => {
        if(user) {
            return res.status(400).json ({
                msg:"email is already registered. did you forget your password"
            }); 
        }
    });

    //the data is valid now we can register the user
    let newUser = new User ({
        name,
        username,
        password,
        email
    });

    //hash the password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password, salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash; 
            newUser.save().then(user=>{
                return res.status(201).json({
                    success:true,
                    msg:"user is now registered"
                });
            });
        });
    });
});

    /* @route POST api/users/login
    * @desc Signing in the User
    * @access Public
    */


   router.post('/login', (req, res) => {
       User.findOne({
           username: req.body.username
       }).then(user => {
           if (!user) {
            router.get('/', function (req, res) {
                res.send('wrong user');
              })
               return res.status(404).json({
                   msg: "Username is not found.",
                   success: false
               });
           }
           // If there is user we are now going to compare the password
           bcrypt.compare(req.body.password, user.password).then(isMatch => {
               if (isMatch) {
                   // User's password is correct and we need to send the JSON Token for that user
                   const payload = {
                       _id: user._id,
                       username: user.username,
                       name: user.name,
                       email: user.email
                   }
                   jwt.sign(payload, key, {
                       expiresIn: 604800
                   }, (err, token) => {
                       res.status(200).json({
                           success: true,
                           token: `Bearer ${token}`,
                           user: user,
                           msg: "Hurry! You are now logged in."
                       });
                   })
               } else {
                   return res.status(404).json({
                       msg: "Incorrect password.",
                       success: false
                   });
               }
           })
       });
   });
   
   /**
    * @route POST api/users/profile
    * @desc Return the User's Data
    * @access Private
    */
   router.get('/profile', passport.authenticate('jwt', {
       session: false
   }), (req, res) => {
       return res.json({
           user: req.user
       });
   });

   router.get('/logout', (req, res) => {
    return res.json({
        user: req.user
    });
});




module.exports=router;