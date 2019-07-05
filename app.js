// importing modules
const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
let cookieParser = require("cookie-parser");
let passport = require("passport");

// importing config
const port = require("./server/config/config").port;

// importing routers
let authRouter = require("./server/routes/auth");
let errorRouter = require("./server/routes/loginerror");
let userRouter = require("./server/routes/users");

// initialising passport
app.use(passport.initialize());

// importing github oauth
require("./server/utils/githubOAuth");

// connecting mongoose to mongodb
mongoose.connect(
	"mongodb://localhost/encore",
	{ useNewUrlParser: true },
	function(err, connection) {
		err
			? console.log(__filename + ": Mongoose not connected to MongoDB.")
			: console.log(__filename + ": Mongoose connected to MongoDB.");
	}
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// defining static path
app.use(express.static(path.join(__dirname, "public")));

// defining view engine
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

// integrating sessions
// app.use(
//  session({
//   secret: "encore",
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore({ url: "mongodb://localhost/encore-session" })
//  })
// );

app.use(passport.session());
// serializing and deserializing user sessions
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

if (process.env.NODE_ENV === "development") {
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config");
	var compiler = webpack(webpackConfig);

	app.use(
		require("webpack-dev-middleware")(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath
		})
	);

	app.use(require("webpack-hot-middleware")(compiler));
}

// app.use(cors());

// routing
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/api", require("./server/routes/api/api"));
app.use("/loginerror", errorRouter);
app.use("/", require("./server/routes/index"));

// adding port
app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
