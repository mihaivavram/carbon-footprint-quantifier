var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.urlencoded())

app.post('/getcarbonfootprint', function(req, res) {
  console.log(req.body)
  res.send('You sent the name "' + req.body.milesDrivenDay + '".');
});

app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});
