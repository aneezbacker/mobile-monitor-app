import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackedPhoneSettingsPage } from './tracked-phone-settings.page';

const routes: Routes = [
  {
    path: '',
    component: TrackedPhoneSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackedPhoneSettingsPage]
})
export class TrackedPhoneSettingsPageModule {}
