import { ProdutosService } from '../servicos/produtos.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-atlproduto',
  templateUrl: './atlproduto.page.html',
  styleUrls: ['./atlproduto.page.scss'],
})
export class AtlprodutoPage implements OnInit {
  id: string;
  nome:string;
  descricao: string;
  quantidade: number;
  valor: string;

  constructor(private nav: NavController, private rota: ActivatedRoute, private servico: ProdutosService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    this.nome = this.rota.snapshot.params["nome"];
    this.descricao = this.rota.snapshot.params["descricao"];
    this.quantidade = this.rota.snapshot.params["quantidade"];
    this.valor = this.rota.snapshot.params["valor"];
  }

  atualizar(){
    console.log("Método atualizar no ts da página");
    
    let atualizar = {};

    atualizar['nome']=this.nome;
    atualizar['descricao']=this.descricao;
    atualizar['quantidade']=this.quantidade;
    atualizar['valor']=this.valor;

    console.log(atualizar);

    this.servico.alterar(atualizar,this.id).then(
      resolve=>{
        this.nav.navigateForward('dashboard');
      },
      error =>{
        console.log("Deu erro.");
      }
    );

  }

}
