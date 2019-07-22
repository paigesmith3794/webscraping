var mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

mongoose.connect("mongodb://localhost/allthenewsdb", function (error) {
    if (error) throw error;
    console.log("Database connected");

});

