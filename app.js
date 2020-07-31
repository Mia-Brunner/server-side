const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require('express-session');
const MongoStore = require("connect-mongo")(session)
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose')
const quoteRouter = require("./routes/quotes_routes")
const authRouter = require('./routes/auth_routes');
const userRouter = require('./routes/users_router');

const port = process.env.PORT || 3009

const app = express()

app.use(bodyParser.json());
// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const dbConn = process.env.MONGODB_URI || 'mongodb://localhost/electrician'
// const dbConn = 'mongodb://localhost/electrician'

//  avoid deprecation warnings:
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database',dbConn);
        }
		});
		
const whitelist = ['http://localhost:3000','https://pid-electrical-services.netlify.app']

app.use(cors({
        credentials: true
}
))

//app.use(cors({
//	credentials: true,
//	origin: function (origin,callback) {
//			const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
//			console.log("found whitelistIndex", whitelistIndex)
//			callback(null,whitelistIndex > -1)
//	}
//}));

app.enable('trust proxy');

app.use(session({
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        secure: true,
        sameSite: "none",
        httpOnly: false,
        maxAge: 1800000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// Database connection for Quotes form
const Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Quotes form on homepage

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
 
//app.post('/quotes', (req, res) => {
   // const { name, phone, message } = req.body;
   // const quote = new Quote({
     //       name,
       //     phone,
         //   message
    //});
   // quote.save().catch(err => err);
   // console.log(`Name: ${name}\nPhone: ${phone}\nMessage": ${message}`);
   // res.sendFile(__dirname + '/quotes.html');
//})

app.use(passport.initialize())
app.use(passport.session())
require("./config/passport")

app.get('/', (req, res) => {
    console.log('get on /');
    console.log('req.session', req.session)
    console.log('req.user', req.user)
    res.send('got your request');
})

// Define routes 
app.use("/quotes", quoteRouter)
app.use("/auth", authRouter)
app.use('/users', userRouter)


app.listen(port, () => {
	console.log(`Electrician app listening on port ${port}`)
}) 

