var express= require('express');
var app = express();
var mongoose = require('mongoose');
var request = require('request');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname));
var connect = mongoose.connect('mongodb://localhost/ng-hearthstone', function(err) {
  console.log('hello',err)
})
var db = mongoose.connection;
db.once('open', function() {
  console.log('db opened')
});

var cardsetSchema = new mongoose.Schema({
  cardset:Object
});

var cardsetCollection = mongoose.model('cardsetModel',cardsetSchema)

app.get('/', function(req,res){
  res.sendFile('index.html');
});

 function getCards(req,res){
  cardMap = {};
  cardsetCollection.find({}, function(err,cards){
    for(i = 0;i < cards.length;i++){
      var cardsetName = cards[i].cardset[0].cardSet;
      cardMap[cardsetName] = [];
      for(var j = 0; j < cards[i].cardset.length;j++){
        cardMap[cardsetName].push(cards[i].cardset[j]);
      }
    }
    console.log(cardMap);
    res.send(cardMap)
  });
}

app.get('/cards', getCards);

app.listen(8900, function() {
  console.log("listening on 8900!");
});

/*function addCards(){
  var options = {
    url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
    headers: {
      "X-Mashape-Authorization":"CoOndkDhoKmshDPeHj0wo34mhYGhp1Qzv7rjsnZvEzmruV3rIQ"
    }
  };

  function callback(error, response, body) {
      var info = JSON.parse(body);
      for(key in info){
        var cardModel = new cardsetCollection({cardset:info[key]})
        cardModel.save(function(err){
          console.log('here')
          return undefined;
        })
      }

  }
  request(options, callback);
}
addCards();*/
