//declare required variables to allow express/nodeJS to function correctly
const express = require('express');
const app = express();

const path = require('path');

const router = express.Router();
//const fs = require('fs');

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.urlencoded(
    {extended: false}
));
app.use(bodyParser.json());

//allow us to hash and salt the passwords for security
const bcrypt = require("bcrypt")

//set the server to serve the files in the "public" folder in our project directory
app.use(express.static('public'));


//load index.html upon accessing the localhost server
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

//Backend array to store user account information. Since this is in this server file, it is seperate from the front end.
//so it is secure.
const users = []

//when the register account form is submitted, handle the data here
app.post("/register-submit", async(req, res) => {

    //check if user already has an account
    for(let i = 0; i < users.length; i++) {
        if(users[i].email === req.body.email){
            console.log(req.body.email + " EMAIL ALREADY IN USE");
            res.sendFile(path.join(__dirname+'/public/register-error.html'));
            return;
        }
    }

    try{
        //use async function bcrypt to salt and hash the password so it is secure.
        //We use 10 rounds of salting as it is very secure but also runs quickly.
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create a new user object and add to user array
        const newUser = { email: req.body.email, password: hashedPassword }
        users.push(newUser);

        //redirect to a register success page
        res.redirect('register-success.html');
    } catch {
        //catch error if it occurs
        console.log("Error in registering user.")
    }

   // const hashedPassword = bcrypt.hash(req.body.password, salt);

    //show user database in console for debugging purposes
    console.log("--------USER DATABASE--------");
    for(let j = 0; j < users.length; j++) {
        console.log("User: " + users[j].email + " --- Password: " + users[j].password
        + "\n");
    }
    console.log("-----------------------------");

})

//when the login form is submitted, handle the data here
app.post("/login-submit", async(req, res) => {
    const submittedEmail = req.body.username;
    const submittedPassword = req.body.password;

    //search user array for account
    let searching = users.find(y => y.email = submittedEmail);
    if(searching == null){
        res.redirect('login-error.html');
    }else{
          try{
              //decrypt password using bcyrpt compare
              if(await bcrypt.compare(submittedPassword, searching.password)){
                  console.log(submittedPassword);
                  comparePasswords(submittedPassword, searching.password);
                 res.redirect('login-success.html');
              }else{
                  res.redirect('login-error.html');
              }
          } catch {

          }
    }

})

//create localhost server on port 5000
app.use('/', router);
app.listen(3000, () =>  //make the port 3000 listen
    console.log("Express listening at port 5000"))


console.log('Running at Port 5000');



//de-bugging purposes only. Not used in website. Ignore.
function comparePasswords(passw, hash){
    bcrypt.compare(passw, hash, function(err, result) {
        if (result) {
            console.log("It matches!")
        }
        else {
            console.log("Invalid password!");
        }
    });

}