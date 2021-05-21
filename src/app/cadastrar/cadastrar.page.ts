import { AutenticacaoService } from './../servicos/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  email: string;
  senha:string;
  acesso:string;

  constructor(private servico: AutenticacaoService,private nav: NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log("Método cadastra no ts da página");
    let usuario = {};

    usuario['email']=this.email;
    usuario['senha']=this.senha;
    usuario['acesso']="padrao";
    console.log(usuario);

    this.servico.cadastrar(usuario).then(
      resolve=>{
        this.nav.navigateForward('login');
      },
      error =>{
        console.log("Deu erro.");
      }
    );
  }



}
