import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './../servicos/autenticacao.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  senha:string;

  constructor(private servico: AutenticacaoService,private nav: NavController) { }

  ngOnInit() {
  }
logar(){
  console.log("Método cadastra no ts da página");
    let usuario = {};

    usuario['email']=this.email;
    usuario['senha']=this.senha;
    
    console.log(usuario);

    this.servico.logar(usuario).then(
      resolve=>{
        this.nav.navigateForward('dashboard');
      },
      error =>{
        console.log("Deu erro.");
      }
    );

}
}
