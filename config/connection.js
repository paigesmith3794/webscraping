var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/allthenewsdb", function (error) {
    if (error) throw error;
    console.log("Database connected");

});

