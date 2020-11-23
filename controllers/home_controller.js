var bodyParser=require('body-parser');
const Task = require('../models/tasks');
const mongoose = require('mongoose')
var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports.home = function (req, res) {
    Task.find({}, function(err, tasks){
        // handling error
        if(err){
            console.log('error in loding data from planner database');
            return;
        }
        // returning response
        return res.render('home.ejs', {
            title:'test',
            todo:tasks  
         });
    })
}
module.exports.addTask = function (req, res) {
    // console.log(req);
    Task.create({
        task: req.query.description,
        date: req.query.date,
        category: req.query.category
    }, function(err, newTask){
        // error handling
        if(err){
            console.log('error in adding task to planner db');
            return;
        }
        // returning response
        console.log('*******************', newTask);
        return res.redirect('back');
    });
}