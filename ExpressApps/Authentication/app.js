var passportLocalMongoose = require("passport-local-mongoose"),
    LocalStrategy = require("passport-local"),
    bodyParser = require("body-parser"),
    express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//===================
// ROUTES
//===================

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

//Auth Routes
app.get("/register", function(req, res) {
    res.render("register");
})

app.post("/register", function(req, res) {
    req.body.username
    req.body.password
    User.register(new User({
        username: req.body.username
    }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("secret");
            });
        };
    });
});

//LOGIN ROUTES
//RENDER LOGIN FORM
app.get("/login", function(req, res) {
    res.render("login");
});

//LOGIN LOGIC
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"

}), function(req, res) {});




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started....")
});
