import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackedPhoneStatusPage } from './tracked-phone-status.page';

const routes: Routes = [
  {
    path: '',
    component: TrackedPhoneStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackedPhoneStatusPage]
})
export class TrackedPhoneStatusPageModule {}
