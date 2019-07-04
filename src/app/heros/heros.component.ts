import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

export class HerosComponent implements OnInit {
  selectedhero:Hero;
 
  heros:Hero[];

   hero:{
    id:1,
    name:"Windestorm"
  };
  data: any = [];
  array: any = [];

  

  
  constructor( private heroservice:HeroService, private http: Http) { }

  ngOnInit() { 
    // this.getHeroes();
    this.getData();

   };
   onSelect(hero1:Hero):void
  {
    this.selectedhero=hero1;
    
  }

   
  
  // getHeroes() {
  //   this.heroservice.getHeroe()
  //       .subscribe(heros => this.heros = heros);
  //   // this.heros=this.heroservice.getHeroes();

  // }
getData(){
  // this.http.get('http://localhost:1000/hero')
  this.heroservice.getData().subscribe((res)=>{
    console.log(res);
    this.array=res;
    // console.log(JSON.parse(res['_body']),'dataaa')
})

}
  
}
