import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';


@Injectable()
export class CardsService{
  constructor(private http:Http){}
  private cardsUrl = '/cards';
  getCards(): Observable<any>{
    return this.http.get(this.cardsUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  private extractData(res: Response) {
    var body = res.json();
    return body;
  }
  private handleError(error:any){
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  return Observable.throw(errMsg);

  }
}
