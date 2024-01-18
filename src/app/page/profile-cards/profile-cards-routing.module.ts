import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCardsPage } from './profile-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCardsPageRoutingModule {}
