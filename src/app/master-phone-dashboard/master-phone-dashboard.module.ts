import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasterPhoneDashboardPage } from './master-phone-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: MasterPhoneDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterPhoneDashboardPage]
})
export class MasterPhoneDashboardPageModule {}
