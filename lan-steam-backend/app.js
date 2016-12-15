var steamGroup = require('steam-group');
var express = require('express');
var config = require('config');
var app = express();

app.use(function(req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", config.get('cross-domain-header'));
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/group/:groupName', function (req, res) {
    var group = steamGroup.fromName(req.params.groupName);
    group.getMembers(handleResult);
    function handleResult(a,result,c){
        res.send(result);
    }
});

app.listen(config.get('port'), function () {
    console.log('Listening port ' + config.get('port'));
});