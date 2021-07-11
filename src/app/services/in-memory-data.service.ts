import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const movies = [
      {id: 1, name:"Leon",description:"İntikam iyi bir şey değil, Mathilda.İnan.Unutmak daha iyi.",imageUrl:"leon.jpg"},
      {id: 2, name:"7.Koğuştaki Mucize",description:"Sevmek biri için ölmek değil, her şeye rağmen yaşayabilmekmiş.",imageUrl:"7.kogustakimucize.jpg"},
      {id: 3, name:"The Green Mile",description:"Yoruldum patron! Yollarda, yağmurdaki bir serçe kadar yalnız olmaktan yoruldum.Ve insanların bir birine kötü davranmasından bıktım.",imageUrl:"greenmile.jpg"},
      {id: 4, name:"Bird Box",description:"Sakın gözlerini açma.",imageUrl:"birdbox.jpg"},
      {id: 5, name:"Naim",description:"Bileğinle değil yüreğinle kaldıracaksın.",imageUrl:"naim.jpg"},
      {id: 6, name:"Silence of The Lambs",description:"Hayat, kitaplara göre fazla kaypaktır.",imageUrl:"silenceofthelambs.jpg"},
      {id: 7, name:"The Shawshank Redemption",description:"Unutma Red umut iyi bir şeydir. Belki de en iyisi ve iyi şeyler asla ölmez.",imageUrl:"shawshankredemption.jpg"},
      {id: 8, name:"Arrival",description:"Kendimi bildim bileli başım yıldızlara dönüktür. Ancak beni en çok şaşırtan şey onlarla değil de seninle karşılaşmaktı.",imageUrl:"arrival.jpg"},
      {id: 9, name:"Avatar",description:"Yeri gelir, hayatınız bir tek delice hareketiniz ile değişebilir.",imageUrl:"avatar.jpg"}
    ];
    return {movies};
  }

}
