import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KostasPage } from './kostas.page';

const routes: Routes = [
  {
    path: '',
    component: KostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KostasPageRoutingModule {}
