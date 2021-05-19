import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 OpenLogin(){
    this.router.navigate(['login']);
  }
  Openproduto(){
    this.router.navigate(['cadproduto']);
  }
  lista(){
    this.router.navigate(['dashboard']);
  }
}
