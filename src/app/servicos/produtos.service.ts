import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore:AngularFirestore) { }

  listar(){
    return this.firestore.collection("produtos").snapshotChanges();
  }

  cadastrar(prod){
    return  this.firestore.collection("produtos").add(prod);
  }

alterar(prod, id){
  return this.firestore.doc("produtos/" + id).update(prod);
  }

  excluir(prod){
    return this.firestore.doc("produtos/" + prod.id ).delete();
  }
}
