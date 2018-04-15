var express = require('express');
var router = express.Router();
var mysql=require('mysql');
//var expressValidator = require('express-validator');
var mongo = require('./mongodb/mongo');
var kafka = require('./kafka/client');
//var url = 'mongodb://localhost:27017/freelancer';

var session = require('client-sessions');
var url='mongodb://<SAISH SHINDE>:<$harwarI09>@ds117251.mlab.com:17251/freelancer'
var expressSessions = require("express-session");
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

var dummy="dummy";

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"saish09",
    database:"Test"
});


router.post('/login', function (req, res, next) {

    var email = req.body.email;
    var password = req.body.Password;
    console.log("reached login");

    mongo.connect(function (db) {
        var coll = db.collection('user');
        coll.findOne({'email': email, 'password': password}, function (err, user) {
                if (err) {
                    res.json({
                        status: '401'
                    });
                }
                if (!user) {
                    console.log('User Not Found with email ' + email);
                    res.json({
                        status: '401'
                    });
                }
                else {
                    req.session.user = user.Username;

                    dummy=user.Username;
                        res.json({
                            email: email,
                            status: 200,
                            value: user
                        });
                }
            });
    });
});

router.post('/update', function (req, res, next) {
    var old_email = req.body.old_email;
    var old_password = req.body.old_password;
    var name = req.body.name;
    var email = req.body.email;
    var phones = req.body.phones;
    var aboutme = req.body.aboutme;
    var skills = req.body.skills;
    skills = skills.split(',');
    console.log(skills);
    var data = {name : name,
        email : email,
        phones : phones,
        aboutme:aboutme,
        skills:skills
    }
    console.log("reached update");

    mongo.connect(function (db) {
        var coll = db.collection('user');
        coll.findOne({'email': old_email, 'password': old_password}, function (err, user) {
           // var paths = user["ops"][0]["_id"];
            console.log("Inside update q1 "+user);
            if (err) {
                res.json({
                    status: '401'
                });
            }
            if (user) {
                console.log('Inside Update Query' + email);
                // mongo.connect(function (db) {
                    var collect = db.collection('update');
                    collect.findOne({
                        $or: ({
                            'email': email,
                            'name': name,
                            'phones': phones,
                            'aboutme': aboutme
                        })
                    }, function (err, update) {
                        if (update) {
                            var path = update["ops"][0]["_id"];
                            console.log(path)
                            collect.findAndModify(
                                {_id:ObjectId(update.id)},
                                [],
                                {$set:{email:data.email,name:data.name,phones:data.phones,aboutme:data.aboutme,skills:data.skills}}
                            )
                            coll.findAndModify(
                                {_id:ObjectId(user.id)},
                                [],
                                {$set:{email:data.email}}
                            )
                            res.json({
                                status: 200,
                                email:data.email,
                                name:data.name,
                                phones:data.phones,
                                aboutme:data.aboutme,
                                skills:data.skills
                            });
                        }
                        else {
                            mongo.insertDocument(db, 'update', data, function (err, results) {
                                if (err) {
                                    console.log("sending status 401")
                                    res.json({
                                        status: '401'
                                    });
                                }
                                else {
                                    console.log("User Profile Updated Successfully")
                                    var path = results["ops"][0]["_id"];
                                    console.log(path);
                                    res.json({
                                        status: 200,
                                        email:data.email,
                                        name:data.name,
                                        phones:data.phones,
                                        aboutme:data.aboutme,
                                        skills:data.skills
                                    });
                                }
                            });
                        }
                    });
                // });
            }
                });
    });
});
router.post('/signup', function (req, res, next) {

    var email = req.body.email;
    var Username = req.body.UserName;
    var password = req.body.Password;

    console.log("email :" + email);
    console.log("UserName :" + Username);

    var data = {Username : Username,
        email : email,
        password : password
    }

    // kafka.make_request('signup_topic',data, function(err,results){
    //     console.log("I got this result back after signing up",results);
    //     if(err){
    //         console.log("Error")
    //         res.json(results)
    //     }
    //     else
    //     {
    //         console.log("registered")
    //         res.json(results)
    //     }
    // });
    mongo.connect(function(db){
        console.log("Connected to MongoDB at ",url)

        var coll = db.collection('user');
        coll.findOne({'email':email},function (err,user) {
            if(err){
                console.log("sending status 401")
                res.json({
                    status : '401'
                });
            }
            else if(user){
                console.log("sending status 401")
                res.json({
                    status : '401'
                });
            }

            else{
                mongo.insertDocument(db,'user',data,function (err,results) {
                    if (err) {
                        console.log("sending status 401")
                        res.json({
                            status: '401'
                        });
                    }
                    else {
                        console.log("User Registered")
                        var path = results["ops"][0]["_id"];
                        console.log(path);
                        res.json({
                            status: 200,
                        });
                    }
                });
            }
        })
 });
});

router.post('/postproject', function (req, res, next) {

    var projectname = req.body.projectname;
    var skills = req.body.skills;
    var ProjectDecription= req.body.ProjectDecription;
    var budget= req.body.budget;
    skills = skills.split(',');
    console.log(skills);
    console.log("projectname :" + projectname);
    console.log("skills :" + skills);
    console.log("ProjectDescription :" + ProjectDecription);
    console.log("budget :" + budget);


    var data = {
        projectname : projectname,
        skills : skills,
        projectDescription : ProjectDecription,
        budget: budget,
        employer: dummy,
        status: "open"
    }
    console.log("reached postproject");
    mongo.connect(function(db){
        console.log("Connected to MongoDB at ",url)

        //var coll = db.collection('projectlist');
        mongo.insertDocument(db,'projectlist',data,function (err,results) {
                    if (err) {
                        console.log("sending status 401")
                        res.json({
                            status: '401'
                        });
                    }
                    else {
                        console.log("Post Project Successful")
                        // var path = results["ops"][0]["_id"];
                        // console.log(path);
                        res.json({
                            status: 200,
                        });
                    }
                });
    });
});



router.post('/myprofile', function (req, res, next) {

    console.log("reached myprofile");

    mongo.connect(function (db) {
        var coll = db.collection('update');
        coll.findOne({'name': dummy}, function (err, user) {
            if (err) {
                res.json({
                    status: '401'
                });
            }
            if (!user) {
                console.log('User Not Found');
                res.json({
                    status: '401'
                });
            }
            else {
                res.json({
                    status: 200,
                    value: user
                });
            }
        });
    });
});
router.post('/dashboard', function (req, res, next) {

    console.log("reached dashboard");
    connection.query('SELECT * FROM projects' ,function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results !== null) {
            console.log(results);
            res.send({message: "dashing is successful ", value: results});
        }
    });
});

router.post('/myproject', function (req, res, next) {

    console.log("reached MyProject Home");

    mongo.connect(function (db) {
        console.log("insde db")
        var coll = db.collection('projectlist');
        console.log("inside db")
        coll.find().toArray(function (err, user) {
            if (err) {
                res.json({
                    status: '401'
                });
            }
            if (!user) {
                console.log('User Not Find the project details');
                res.json({
                    status: '401'
                });
            }
            else {
                res.json({
                    value: user
                });
            }
        });
    });
});

router.post('/relevant', function (req, res, next) {

    console.log("reached Relevant Home");

    mongo.connect(function (db) {
        var coll = db.collection('update');
        var projects=db.collection('projectlist');
        console.log("inside update db");
        coll.findOne({'name':dummy},function (err,user) {
            if (err) {
                res.json({
                    status: '401'
                });
            }
            if (!user) {
                console.log('User Not Find the project details');
                res.json({
                    status: '401'
                });
            }
            else {
                var skilluser=user.skills;
                console.log(skilluser);
                projects.find().toArray(function (err, result) {
                    if (err) {
                        res.json({
                            status: '401'
                        });
                    }
                    else {
                            var matched = [];
                            console.log("result length-->",result.length)
                            for ( var i = 0; i < result.length; i++ ) {
                                var count = 0;
                                var rowskill = result[i].skills

                                for ( var j = 0; j<rowskill.length; j++ ) {

                                    for (var k = 0; k < skilluser.length; k++) {
                                        if (skilluser[k] === rowskill[j]) {
                                            count++;
                                            }
                                        }
                                    }
                                if (count >= 3) {
                                    matched.push(result[i]);
                                    console.log(matched);
                                }
                            }
                        res.json({
                            value: matched
                        });
                    }
                });
                 }
        });
    });
});

router.post('/bids', function (req, res, next)

{
    console.log("reached put bids");
    console.log(req.body);
    var projectname = req.body.projectname;
    var bid = req.body.bid;
    var period=req.body.period;
    console.log("days-->", period);
    console.log("bid value",bid);
    mongo.connect(function (db) {
        var coll = db.collection('projectlist');

        coll.update({'projectname': projectname}, {
            "$push": {
                "Bids": {
                    "bidder": dummy,
                    "bid": bid,
                    "period":period
                }
            }
        }, function (err, resp) {
            if (err) {
                res.json({
                    status: 401
                });
            }
            if (!resp) {
                console.log('User Not Find the project details');
                res.json({
                    status: 401
                });
            }
            else {
                res.json({
                    status: 200
                });
            }
        });
    });
});

router.post('/pay', function (req, res, next) {
    var name = req.body.name;
    var creditcard = req.body.creditcard;
    var cvv= req.body.cvv;
    var expdate= req.body.expdate;
    var amount=req.body.amounts;
    var freelancer=req.body.freelancer;
    console.log("Reached Payment");

    console.log("name: " + name);
    console.log("creditcard: " + creditcard);
    console.log("cvv: " + cvv);
    console.log("expdate: " + expdate);
    console.log("amount: "+ amount);


    var data = {
        name : name,
        creditcard : creditcard,
        cvv : cvv,
        expdate : expdate,
        amount : amount,
        freelancer : freelancer
    }



    mongo.connect(function(db){
        console.log("Connected to MongoDB at ",url);

        mongo.insertDocument(db,'payment',data,function (err,results) {
            if (err) {
                console.log("sending status 401")
                res.json({
                    status: '401'
                });
            }
            else {
                var coll = db.collection('balance');
                coll.findOne({'freelancer': freelancer}, function (err, baluser) {
                    if(baluser) {
                        var newbalance = baluser.amount + amount
                        var data1 =
                            {
                                amount: newbalance,
                                freelancer: freelancer,

                            }
                    }
                    else {
                        mongo.insertDocument(db, 'balance', data1, function (err, users) {
                            console.log("Payment Made Successful")
                            res.json({
                                status: 200,
                                message: 'Payment Made Successfully',
                                value: results
                            });
                        });
                    }
                });
            }
        });
    });
});

router.post('/freebal', function (req, res, next) {

    console.log("Reached freelancer balance");

    mongo.connect(function (db) {
        console.log("Connected to MongoDB at ", url)

        var coll = db.collection('balance');
        coll.findOne({'freelancer': dummy}, function (err, user) {
            if (err) {
                console.log("sending status 401")
                res.json({
                    status: '401'
                });
            }
            else if (user) {
                res.json({
                    status: 200,
                    amount: user.amount
                });
            }
        });
    });
});

router.post('/projbidon', function (req, res, next) {
    console.log("Reached project bid on by freelancer balance");

    mongo.connect(function (db) {
        console.log("Connected to MongoDB at ", url)

        mongo.connect(function (db) {
            var coll = db.collection('projectlist');
            console.log(dummy);
            coll.find({'Bids.bidder':dummy}).toArray(function (err, user) {
                if (err) {
                    res.json({
                        status: '401'
                    });
                }
                else {
                    res.json({
                        value: user
                    });
                }
            });
        });
    });
});

router.post('/withdraw', function (req, res, next) {
    var balance=req.body.withdraw;
    console.log("Reached withdraw balance");

    mongo.connect(function (db) {
        console.log("Connected to MongoDB at ", url)

        var coll = db.collection('balance');
        coll.findOne({'freelancer': dummy}, function (err, user) {
                if (err) {
                    console.log("sending status 401")
                    res.json({
                        status: '401'
                    });
                }
                else if (user) {
                    var newbalance=user.amount-balance;
                    console.log(user.amount)
                    console.log("users id -->",user._id);
                    coll.findAndModify(
                        {_id:user._id},
                        [],
                        {$set:{freelancer:user.freelancer,balance:newbalance}}
                    )
                    res.json({
                        status: 200,
                        balance: user.amount
                    });
                }
            });
    });
});

router.post('/projectdetails', function (req, res, next) {

    console.log("Reached projectdetails");
    mongo.connect(function (db) {
        console.log("Connected to MongoDB at ", url)

        mongo.connect(function (db) {
            var coll = db.collection('projectlist');
            console.log(dummy);
            coll.find().toArray(function (err, user) {
                if (err) {
                    res.json({
                        status: '401'
                    });
                }
                else {
                    res.json({
                        value: user
                    });
                }
            });
        });
    });
});

router.post('/allbids', function (req, res, next) {

    console.log("Reached all bids");
    mongo.connect(function (db) {
        console.log("Connected to MongoDB at ", url)

        mongo.connect(function (db) {
            var coll = db.collection('projectlist');
            console.log(dummy);
            coll.find({'employer': dummy}).toArray(function (err, user) {
                if (err) {
                    res.json({
                        status: '401'
                    });
                }
                else {
                    res.json({
                        value: user
                    });
                }
            });
        });
    });
});
//
// router.post('/logout', function(req,res){
//     var session=req.session;
//     dummy="dummy";
//     console.log("In logout ", req.session.user)
//     session.user = null;
//     session.destroy();
//     res.json({
//         status:'200',
//         message : "Logged Out."
//     });
// });

router.post('/hire', function (req, res, next) {

    console.log("Reached hire");

    console.log(req.body);
    var projectname = req.body.projectname;
    var status = req.body.hire;
    var bidder = req.body.bidder;
    var bid = req.body.bid;
    var period = req.body.period;

    var data = {
        projectname : projectname,
        status : status,
        bidder: bidder,
        bid : bid,
        period : period
    }


    mongo.connect(function (db) {
        var coll = db.collection('projectlist');

        coll.findOne({'projectname': projectname}, function (err, resp) {
            if (err) {
                res.json({
                    status: 401
                });
            }
            else if(resp) {
                // coll.findAndModify(
                //     {_id:ObjectId(resp.id)},
                //     [],
                //     {$set:{status:status}}
                // )
                res.json({
                    status: 200,
                    value:resp,
                    data:data
                });
            }
            // {
            //     // "$addFields": {
            //     //     "status":status
            //     // }
            // }
        });
    });
});
module.exports = router;
