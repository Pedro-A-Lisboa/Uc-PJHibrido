import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './../servicos/autenticacao.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
})
export class RecuperarsenhaPage implements OnInit {
 recEmail:string;
  constructor(private servico: AutenticacaoService,private nav: NavController) { }

  ngOnInit() {
  }

  recSenha(){
    }

}
