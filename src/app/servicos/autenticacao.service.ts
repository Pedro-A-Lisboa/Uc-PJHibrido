import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

import{AngularFireAuth} 
from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private auth:AngularFireAuth) { }

  cadastrar(usr){
     console.log("método cadastrar do serviço autenticação");
     console.log(usr);

     return new Promise<any>((resolve,reject)=>{
       this.auth.createUserWithEmailAndPassword(usr.email,usr.senha).then(res => resolve(res),err =>reject(err))

     });
  }

  logar(usr){
    console.log("método cadastrar do serviço autenticação");
    console.log(usr);

    return new Promise<any>((resolve,reject)=>{
      this.auth.signInWithEmailAndPassword(usr.email,usr.senha).then(res => resolve(res),err =>reject(err))

    });
 }}
