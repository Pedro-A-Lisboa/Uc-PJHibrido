import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlprodutoPage } from './atlproduto.page';

const routes: Routes = [
  {
    path: '',
    component: AtlprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtlprodutoPageRoutingModule {}
