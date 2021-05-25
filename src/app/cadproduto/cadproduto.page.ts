import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ProdutosService } from '../servicos/produtos.service';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
  email: string;
  servico: string;
}

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

  //upload----
  // Upload Task
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details
  fileName:string;
  fileSize:number;

  //Status check
  isUploading:boolean;
  isUploaded:boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;


  caminhoimagem:string;

  constructor( private service: ProdutosService , private nav: NavController,
    private storage: AngularFireStorage, //upload----
    private database: AngularFirestore //upload----
    ) {

      this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();
     }

  ngOnInit() {
  }

  cadastrar(){
    console.log("Método cadastrar no ts da página");
    
    let cadastrar = {};

    cadastrar['nome']=this.nome;
    cadastrar['descricao']=this.descricao;
    cadastrar['quantidade']=this.quantidade;
    cadastrar['valor']=this.valor;
    cadastrar['caminho'] = this.caminhoimagem;

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
    

uploadFile(event: FileList) {


  // The File object
  const file = event.item(0)
  console.log(file);

  // Validation for Images Only
  if (file.type.split('/')[0] !== 'image') {
   console.error('unsupported file type :( ')
   return;
  }


  this.isUploading = true;
  this.isUploaded = false;


  this.fileName = file.name;
    console.log("luis");
    let nomedividido = this.fileName.split(".");
    console.log(nomedividido);
  // The storage path
  let arquivoalterado =  "luis" + "."+ nomedividido[1];

  const path = `freakyStorage/${new Date().getTime()}_${arquivoalterado}`;
  console.log(path);
  // Totally optional metadata
  const customMetadata = { app: 'Freaky Image Upload Demo' };
  console.log(customMetadata);
  //File reference
  const fileRef = this.storage.ref(path);
  console.log(fileRef);
  // The main task
  this.task = this.storage.upload(path, file, { customMetadata });

  // Get file progress percentage
  this.percentage = this.task.percentageChanges();

  this.snapshot = this.task.snapshotChanges().pipe(

    finalize(() => {
      // Get uploaded file storage path
      this.UploadedFileURL = fileRef.getDownloadURL();

      console.log("Caminho: " + this.UploadedFileURL);
      this.UploadedFileURL.subscribe(resp=>{
        this.addImagetoDB({
          name: file.name,
          filepath: resp,
          size: this.fileSize,
          email: "luis",
          servico: "luis"
        });

        //this.caminhoimagem = resp;
        this.isUploading = false;
        this.isUploaded = true;
        //console.log(this.caminhoimagem);
      },error=>{
        console.error(error);
      })
    }),
    tap(snap => {
        this.fileSize = snap.totalBytes;

    })
  )
}

addImagetoDB(image: MyData) {
  //Create an ID for document
  const id = this.database.createId();
  this.caminhoimagem = image.filepath; 
  console.log(image.filepath);
  
  //Set document id with value in database
  this.imageCollection.doc(id).set(image).then(resp => {
    console.log(resp);
  }).catch(error => {
    console.log("error " + error);
  });
}

  }
 

