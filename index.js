var express=require('express');
var app=express();

//use express router
app.use(express.static('./public'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', require('./routes'));
var port=3000;
app.listen(port, function(err) {
    if(err){
        console.log(`Error In Running The Express Server: ${err}`);
    }
    console.log(`Express Server Is Up & Running On Port: ${port}...`);
});