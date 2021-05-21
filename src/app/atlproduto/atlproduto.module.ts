import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtlprodutoPageRoutingModule } from './atlproduto-routing.module';

import { AtlprodutoPage } from './atlproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtlprodutoPageRoutingModule
  ],
  declarations: [AtlprodutoPage]
})
export class AtlprodutoPageModule {}
