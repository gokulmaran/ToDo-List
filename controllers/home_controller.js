var bodyParser=require('body-parser');
var data=[{item:'get something'},{item:'do something'},{item:'kick something'}];
var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports.home = function (req, res) {
    res.render('home.ejs',{
        title: 'TEST'
    });
}