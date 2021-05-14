import { AutenticacaoService } from './../servicos/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {
  email: string;
  senha:string;


  constructor(private servico: AutenticacaoService,private nav: NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log("Método cadastra no ts da página");
    let usuario = {};

    usuario['email']=this.email;
    usuario['senha']=this.senha;
    
    console.log(usuario);

    this.servico.cadastrar(usuario).then(
      resolve=>{
        this.nav.navigateForward('dashboard');
      },
      error =>{
        console.log("Deu erro.");
      }
    );
  }

 

}
