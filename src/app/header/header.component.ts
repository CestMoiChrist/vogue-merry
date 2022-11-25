import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public storage: Storage) { }
  ngOnInit() { }

  getCartElement(): void {
    this.storage.get("test")
      .catch(err => console.log(err))
      .then(value => alert("La valeur est " + value))

  }

  onGoToHome(){
    this.router.navigate(['/home'])
  }

}
