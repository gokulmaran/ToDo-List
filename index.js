var express=require('express');
var app=express();
const db=require('./config/mongoose');
const { home } = require('./controllers/home_controller');
const Tasks = require('./models/tasks');
// const db = require('./config/mongoose');
//use express router
app.use(express.static('./public'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', require('./routes'));
app.post('/add-task',function(req,res){
    return res.redirect('/index');
 });
 //for deleting a contact
 app.get('/delete-task',function(req,res){
     let id= req.query.id;
     Tasks.findByIdAndDelete(id,function(err){
         if(err){
             console.log('error in deleting an object from database');
             return;
         }
         return res.redirect('back');
     });
 });

var port=3000;

app.listen(port, function(err) {
    if(err){
        console.log(`Error In Running The Express Server: ${err}`);
    }
    console.log(`Express Server Is Up & Running On Port: ${port}...`);
});