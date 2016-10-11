import { Input, Component, EventEmitter,Output,OnChanges} from '@angular/core';

@Component({
  selector:'new-deck',
  templateUrl:'html/newdeck.html',
  styleUrls:['css/decks.css'],
})

export class NewDeckComponent{
  @Input()
  public deckCards:any = null;
  @Output() deckDetect = new EventEmitter();

}
