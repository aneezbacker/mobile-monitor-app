import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackedPhoneDetailsPage } from './tracked-phone-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrackedPhoneDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackedPhoneDetailsPage]
})
export class TrackedPhoneDetailsPageModule {}
