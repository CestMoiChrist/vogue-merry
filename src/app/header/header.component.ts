import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public storage: Storage) { }

  ngOnInit() { }

  getCartElement(): void {
    this.storage.get("test")
      .catch(err => console.log(err))
      .then(value => alert("La valeur est " + value))

  }



}
