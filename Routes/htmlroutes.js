// dependencies to get path package to file path for html
const db =require ("../models");
const path =require ('path');

module.exports =function (app) {

    app.get ("/", function (app) {
        res.sendFile (path.join(_dirname, "../public/index.html"));
    });
// called when "continue workout" or "new workout" is clicked in html 
    app.get("/exercise", function (req,res) {
        res.sendFile(path.join(_dirname, "../public/excercise.html"));
    });
// response times for requests in http servers. 
    app.get("/stats", function (req,res) {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });

}