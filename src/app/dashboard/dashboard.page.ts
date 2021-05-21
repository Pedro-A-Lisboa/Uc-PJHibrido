import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProdutosService} from '../servicos/produtos.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
produtos: any;
nome: string;
descricao:string;
valor:string;
quantidade:string;

  constructor(private servico: ProdutosService, private router: Router,
              private nav: NavController) { }

  ngOnInit() {

    this.servico.listar().subscribe(data => {
      this.produtos = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao'],
          quantidade: e.payload.doc.data()['quantidade'],
          valor: e.payload.doc.data()['valor']

        }
      })
      console.log(this.produtos);
    });
  }

  sair(){
    this.router.navigate(['adm']);
  }

  alterar(prod){
    this.nav.navigateForward(['atlproduto', {id: prod.id, nome: prod.nome, descricao: prod.descricao, quantidade: prod.quantidade, valor:prod.valor}])
  }
  excluir(item){
    this.servico.excluir(item);
  }
}
