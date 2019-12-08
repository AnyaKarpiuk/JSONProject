var http = require('http'), 
    path = require('path'), 
    express = require('express'), 
    fs = require('fs'), 
    xmlParse = require('xslt-processor').xmlParse, 
    xsltProcess = require('xslt-processor').xsltProcess, 
    xml2js = require('xml2js');

var router = express(); 
var server = http.createServer(router); 

router.use(express.static(path.resolve(__dirname, 'Design'))); 
router.use(express.urlencoded({extended: true})); 
router.use(express.json());

//get html file from Design folder
router.get('/', function(req, res){
    res.render('index');
})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
