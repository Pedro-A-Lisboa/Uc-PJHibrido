import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrado(){
    this.router.navigate(['login']);
  }

}
