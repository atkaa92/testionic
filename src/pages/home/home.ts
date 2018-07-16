import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  posts:any;
  type: string;

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage
  ) {

  }

  ionViewWillEnter() {
    this.storage.get('type')
      .then((val) => {
        
        if (val != null) {
          this.type = val
        } else {
          this.type = 'users'
        }
        this.weatherProvider.getData(this.type).subscribe(data => {
          if (this.type == 'users') {
            this.users = data;
            this.posts = null;
          }else{
            this.posts = data;
            this.users = null;
          }
        })

      })
  };
}
