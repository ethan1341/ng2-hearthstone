"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cards_service_1 = require('./cards.service');
var CardsComponent = (function () {
    function CardsComponent(cardsService) {
        this.cardsService = cardsService;
        this.heroClasses = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];
        this.filterSelect = { Druid: false, Hunter: false, Mage: false, Paladin: false, Priest: false, Rogue: false, Shaman: false, Warlock: false, Warrior: false };
        this.filterSet = ['Basic', 'Blackrock Mountain', 'Classic', 'Goblins vs Gnomes', 'Karazhan', 'Naxxramas', 'The Grand Tournament', 'The League of Explorers', ' Whispers of the Old Gods'];
        this.displayCards = [];
        this.deckCards = [];
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    CardsComponent.prototype.getCards = function () {
        var _this = this;
        this.cardsService.getCards()
            .subscribe(function (cards) {
            _this.cards = cards;
            console.log(_this.cards);
        });
    };
    CardsComponent.prototype.filterClass = function (selectedClass) {
        this.displayCards = [];
        this.filteredClass = selectedClass;
        var allCards = this.cards;
        for (var key in allCards) {
            for (var i = 0; i < allCards[key].length; i++) {
                if (allCards[key][i].playerClass == this.filteredClass) {
                    this.displayCards.push(allCards[key][i]);
                }
            }
        }
    };
    CardsComponent.prototype.addToDeck = function (card) {
        console.log('hello');
        this.deckCards.push(card);
    };
    CardsComponent.prototype.ethan = function () {
        console.log('hellofart');
    };
    CardsComponent = __decorate([
        core_1.Component({
            templateUrl: './html/cards.html',
            styleUrls: ['./css/cards.css']
        }), 
        __metadata('design:paramtypes', [cards_service_1.CardsService])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
