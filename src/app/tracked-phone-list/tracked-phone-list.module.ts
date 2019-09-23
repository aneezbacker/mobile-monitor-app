import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackedPhoneListPage } from './tracked-phone-list.page';

const routes: Routes = [
  {
    path: '',
    component: TrackedPhoneListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackedPhoneListPage]
})
export class TrackedPhoneListPageModule {}
