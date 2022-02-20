const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);



let User = require('./UserModel');
let Order = require('./OrderModel');
const { ObjectID } = require('bson');


mongoose.connect('mongodb://localhost/a4', {useNewUrlParser:true});
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    app.listen(3000);
    console.log("Server listening at http://localhost:3000");
});


const e = require('express');

// Setting session store 
const dbStore = new MongoDBStore({
    mongoUrl: 'mongodb://localhost/a4',
    collection: 'sessionData'
});


// Setting up middleware
app.use(session({
    secret: "look right",
    resave: true,
    cookie:{
        maxAge: 1000*60*60*24
    },
    store: dbStore,
    saveUninitialized: false

}));

function showSession(req, res, next){
    if (req.session) 
        res.locals.session = req.session;
    next();
}


app.use(showSession);
app.set("views");
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.json()); // parse json data
app.use(express.urlencoded({extended: true})); // parse form data


app.get('/users', showUsers);
app.get('/users/:id', viewProfile);
app.post('/users/:id', saveProfile);
app.get('/orderFood', auth, orderFood);
app.get('signup');
app.get('/login');
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);

app.post('/orders', submitOrder);


function auth(req, res, next){
    if (!req.session.loggedin){
        res.status(401).send("Unauthorized. Please log in.");
        return;
    }
    next();
}  


app.get('/orderPage/:orderId', (req, res, next)=>{

    Order.find({_id: req.params.orderId}, function(err,result){
        res.render('orderPage', {order: result[0]});
    });

});

app.get(['/', '/index'], (req, res)=>{
    res.render('index');
});
app.get('/signup', (req, res, next)=>{
    res.render('signup');
    next();
});
app.get('/login', (req, res)=>{
    if (req.session.loggedin){
        res.status(200).send('Already logged in');
        return;
    }
    res.render('login');
});


function submitOrder(req, res, next){
  
    let order = new Order({        
        ...req.body,
        username: req.session.username  
    });

   order.save(function(err, result){

    const query = {_id: req.session.userID};
    const updateDoc = {
        $push: {"orders": order}
    }
    User.updateOne(query, updateDoc, {upsert: true}, function (err, result){
        res.status(200).render('orderform');
    });

   })

}

function login(req, res, next){
    if (req.session.loggedin){
        res.status(200).send('Already logged in');
        return;
    }

    User.find({username: req.body.username, password: req.body.password}, function (err, result){
        if (result.length == 1){
            res.status(200);   
            req.session.loggedin = true;
            req.session.username = result[0].username; 
            req.session.userID = result[0]._id;
            if (result[0].privacy == true){
                req.session.private = true;
            }
            else {
                req.session.private = false;
            }
            res.redirect('/');
            next();
        }
        else {
            res.status(401).render("login", {authorized: false});
        }
    });
}

function signup(req, res, next){
    User.find({username:req.body.username}, function(err, result){
        if (err){
            res.status(500).send("Error saving to database.");
            return;
        }

        if (result.length > 0){
            res.status(401).render("signup", {authorized: false});
            return;
        }
        else {
            let user = new User({username: req.body.username, password: req.body.password, privacy:false, orders: []});
           
            user.save(function (err, result){

                req.session.loggedin = true;
                req.session.username = result.username; 
                req.session.userID = result._id;
                req.session.private = false;
                res.status(200);
                res.redirect('/users/' + result._id);

                next();
            }); 
          
        }
    });
}

function logout (req, res, next){
    if (req.session.loggedin){
        req.session.loggedin = false;
        req.session.username = "";
        req.session.id = "";
        res.redirect('/');
    }
    else{
		res.status(200).send("You cannot log out because you aren't logged in.");
	}
}

function showUsers(req, res, next){
   let re = RegExp(req.query.name, 'i'); // for name query
   if (req.query.hasOwnProperty('name')){
       User.find({privacy:false, username: {$regex: re}}, function(err, result){
           if(err) console.log("Server error");

           res.render('users', {users: result});
           next();

       });
   }
   else {
       User.find({privacy:false}, function(err, result){
           if(err) console.log("Server error");
           res.render('users', {users: result});
           next();
       });
   }

}
function orderFood(req, res, next){
    res.render('orderform');
    next();
}

function saveProfile(req, res, next){
        if (req.session.loggedin && req.session.userID == req.params.id){
            if (req.body.privacy == 'on'){
                User.updateOne({_id: req.params.id}, {privacy: true}, function(err, result){
                    if (err){ 
                        res.status(500).send("Invalid User ID");
                        return;
                    }
                    req.session.private = true;
                    User.find({_id:req.params.id}, function(err, result){ // find user after updating so you can access the user model and its properties
                        res.status(200).render('profile', {username: req.session.username, myProfile: true, userID: req.session.userID, orders: result[0].orders});
                    });
                });   
            }
            else if (req.body.privacy == 'off'){
                User.updateOne({_id: req.params.id}, {privacy: false}, function(err, result){
                    if (err) {
                        res.status(500).send("Invalid User ID");
                        return;
                    }
                    req.session.private = false;
                    User.find({_id:req.params.id}, function(err, result){
                        res.status(200).render('profile', {username: req.session.username, myProfile: true, userID: req.session.userID, orders: result[0].orders});
                    });
                });
            } 
        }
        else {
            res.status(403).send("Unauthorized");
        }
}

function viewProfile(req, res, next){

    User.find({_id: req.params.id}, function (err, result){
        if(err){
            res.status(500).send("Invalid User ID");
            return;
        }

        if (result == null || result == undefined){
            res.status(404).send("User not found");
            return;
        }
        if (Object.keys(result).length == 0){
            res.status(404).send("User not found");
            return;
        }


        let user = result[0];
        if (user.privacy == false){
            req.session.privacy = false;
        }
        else{
            req.session.privacy = true;
        }

        if (req.session.loggedin && req.session.userID == req.params.id){
            res.status(200).render('profile', {username: user.username, myProfile: true, userID: user._id, orders: user.orders});
            return;
        }
        else if (user.privacy == true && req.session.userID != req.params.id){
            res.status(403).send("Unauthorized. Please log in.");
            return;
        }
        else if (user.privacy == false){ // view public profile
            res.status(200).render('profile', {username: user.username, myProfile: false, userID: user._id, orders: user.orders});
        }
        else {
            res.status(403).send("Unauthorized. Please log in.");
            return;
        }
        next();
    });
}
