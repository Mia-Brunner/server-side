const passport = require("passport")
const User = require("../models/user")

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// plugin the passport-local-mongoose middleware with our User schema
User.plugin(passportLocalMongoose)