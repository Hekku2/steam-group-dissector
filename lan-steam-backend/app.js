var steamGroup = require('steam-group');
var SteamApi = require('steam-api');
var express = require('express');
var config = require('config');
var Q = require('q');
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
        Q.allSettled(result.map(function (playerId){
            var player = new SteamApi.Player(config.get('steam-api-key'), playerId);
            return player.GetOwnedGames().then(function(games){
                return {
                    playerId: playerId,
                    games: games
                };
            });
        })).then(function (results) {
            var cleaned = results.map(function(promise, index){
                if (promise.state === 'fulfilled'){
                    return {
                        playerId: promise.value.playerId,
                        code: 200,
                        games: promise.value.games
                    };
                } else {
                    return {
                        playerId: result[index],
                        code: promise.reason.statusCode
                    };
                }
            });
            res.send(cleaned);
        });
    }
});

app.listen(config.get('port'), function () {
    console.log('Listening port ' + config.get('port'));
});