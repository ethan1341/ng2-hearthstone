import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
@Component({
  templateUrl:'./html/cards.html',
  styleUrls:['./css/cards.css']
})
//vvv
export class CardsComponent implements OnInit{
  heroClasses:any[] = ['Druid','Hunter','Mage','Paladin','Priest','Rogue','Shaman','Warlock','Warrior'];
  filterSelect = {Druid:false,Hunter:false,Mage:false,Paladin:false,Priest:false,Rogue:false,Shaman:false,Warlock:false,Warrior:false};
  filterSet = ['Basic','Blackrock Mountain','Classic','Goblins vs Gnomes','Karazhan','Naxxramas','The Grand Tournament','The League of Explorers',' Whispers of the Old Gods'];
  filteredClass:any
  filteredSet:any;
  filterCards:any;
  displayCards:any[]=[];
  cards:any;
  deckCards:any=[];
  constructor(
    private cardsService:CardsService
  ){}
  ngOnInit(){
    this.getCards();
  }
  getCards(){
    this.cardsService.getCards()
        .subscribe(cards =>{
          this.cards = cards;
          console.log(this.cards)
        })
  }
  filterClass(selectedClass) {
      this.displayCards = [];
      this.filteredClass = selectedClass;
      var allCards = this.cards;
      for (var key in allCards) {
        for (var i = 0; i < allCards[key].length; i++) {
          if (allCards[key][i].playerClass == this.filteredClass) {
            this.displayCards.push(allCards[key][i])
          }
        }
      }
    }
    addToDeck(card){
      console.log('hello')
      this.deckCards.push(card);
    }
  public ethan(){
    console.log('hellofart')
  }
}
