import { Component } from '@angular/core';
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  myTask: string;
  constructor( public afDB: AngularFireDatabase) {

    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = date.toLocaleDateString('fr-FR', options);
  }

  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
  }

  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }

}
