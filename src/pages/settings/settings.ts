import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('type')
      .then((val) => {
        if (val != null) {
          this.type = val
        } else {
          this.type = 'users'
        }
      })
  }

  ionViewDidLoad() {

  }

  saveForm(){
    let type = this.type;
    this.storage.set('type', type)
    this.navCtrl.push(HomePage)
  }

}
