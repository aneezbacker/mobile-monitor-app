import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhoneSetUpPage } from './phone-set-up.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneSetUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhoneSetUpPage]
})
export class PhoneSetUpPageModule {}
