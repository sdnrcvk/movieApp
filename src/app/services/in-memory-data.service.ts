import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const movies = [
      {id: 1, name:"Leon",description:"Sevginin gücüne inanın.",imageUrl:"leon.jpg"},
      {id: 2, name:"7.Koğuştaki Mucize",description:"Gözyaşlarınızı durdurmayın.",imageUrl:"7.kogustakimucize.jpg"},
      {id: 3, name:"The Green Mile",description:"Harika.",imageUrl:"greenmile.jpg"},
      {id: 4, name:"Bird Box",description:"Gözlerinizi kapatın.",imageUrl:"birdbox.jpg"},
      {id: 5, name:"Naim",description:"Naimi yakından tanıyın.",imageUrl:"naim.jpg"},
      {id: 6, name:"Silence of The Lambs",description:"Bazı sahneleri size hitap etmeyebilir.",imageUrl:"silenceofthelambs.jpg"},
      {id: 7, name:"The Shawshank Redemption",description:"Esaretten kurtulmak mümkün.",imageUrl:"shawshankredemption.jpg"},
      {id: 8, name:"Arrival",description:"Biraz durağan gelebilir.",imageUrl:"arrival.jpg"},
      {id: 9, name:"Avatar",description:"Fantastik nir film.",imageUrl:"avatar.jpg"}
    ];
    return {movies};
  }

}
