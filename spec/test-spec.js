//hello
var server = require('../server.js');

var card = {cardId: "GAME_004", cardSet: "Basic", locale: "enUS", name: "AFK", rarity: "Free", text: "Your turns are shorter.", type: "Enchantment"}
var card2 ={cardId:"HERO_09",cardSet : "Basic",collectible : true, faction : "Neutral",health : 30, img : "http://wow.zamimg.com/images/hearthstone/cards/enus/original/HERO_09.png",imgGold : "http://wow.zamimg.com/images/hearthstone/cards/enus/animated/HERO_09_premium.gif",locale : "enUS",name : "Anduin Wrynn",playerClass : "Priest",rarity : "Free",type : "Hero"};
var card3 = {cardId : "BRMA16_1", cardSet : "Blackrock Mountain", health : 30, img : "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA16_1.png", imgGold : "http://wow.zamimg.com/images/hearthstone/cards/enus/animated/BRMA16_1_premium.gif", locale : "enUS", name : "Atramedes", type : "Hero"};
var cards = [{cardset:[card,card2]},{cardset:[card3]}];


describe('testing prepare Cards',function(){
  it('should preapre card objects', function(){
    var results = server.prepareCards(cards);
    expect(results).toEqual({Basic:[card,card2],"Blackrock Mountain":[card3]})
  })
});

describe('Testing get Cards', function(){
  it('should return object when we get data', function(){
    var res = {send: function(data){
      expect(data).toEqual({Basic:[card,card2],"Blackrock Mountain":[card3]});
    }};
    var fakeCollection = {find:function(query,cb){
      cb(null,cards);
    }}
    server.getCards(fakeCollection,null,res)
  })

  it('should return {}', function(){
    var res = {send: function(data){
      expect(data).toEqual({});
    }};
    var fakeCollection = {find:function(query,cb){
      cb(new Error('there was a db error'),cards);
    }}
    server.getCards(fakeCollection,null,res)
  })
});




