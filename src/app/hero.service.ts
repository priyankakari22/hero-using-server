import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response  } from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  data: any = [];

  constructor(private http: Http) { 
    this.getData();
  }

  // getHeroe(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
    
  //   return of(HEROES);
  // }

  getData(){
    return this.http.get('http://localhost:1000/hero')
    .pipe(map((res: Response) => {
      console.log('Api Service', JSON.parse(res['_body']));
      res = JSON.parse(res['_body']);
      return res;
    }
    // this.data = res,
    ))
     

  }

}
