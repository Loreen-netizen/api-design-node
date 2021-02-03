let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//configure the port number using and environment number
var portNumber = process.env.PORT || 3004;


app.get('/', function(req,res){
res.render('index')
});

app.get('/data', function(req,res){
    var jsonData = {count: 12, message: 'hey', name : __dirname , root : "../public"};
    res.send(jsonData)
})

//start everything up
app.listen(portNumber, function () {
    console.log('app listening on:', portNumber)
});