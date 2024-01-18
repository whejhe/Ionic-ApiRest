import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCardsPageRoutingModule } from './profile-cards-routing.module';

import { ProfileCardsPage } from './profile-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCardsPageRoutingModule
  ],
  declarations: [ProfileCardsPage]
})
export class ProfileCardsPageModule {}
