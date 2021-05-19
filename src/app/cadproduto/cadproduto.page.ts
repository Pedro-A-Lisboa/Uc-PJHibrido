import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.page.html',
  styleUrls: ['./cadproduto.page.scss'],
})
export class CadprodutoPage implements OnInit {

  nome:string;
  descricao: string;
  quantidade: number;
  valor: string;


  constructor( private service: ProdutosService , private nav: NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log("Método cadastrar no ts da página");
    
    let cadastrar = {};

    cadastrar['nome']=this.nome;
    cadastrar['descricao']=this.descricao;
    cadastrar['quantidade']=this.quantidade;
    cadastrar['valor']=this.valor;

    console.log(cadastrar);

    this.service.cadastrar(cadastrar).then(
      resolve=>{
        this.nav.navigateForward('dashboard');
      },
      error =>{
        console.log("Deu erro.");
      }
    );

}
    
  }
 

