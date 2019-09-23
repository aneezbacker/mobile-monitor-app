import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'list',
    // TODO: modify this
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'phone-set-up', loadChildren: './phone-set-up/phone-set-up.module#PhoneSetUpPageModule' },
  { path: 'tracked-phone-set-up', loadChildren: './tracked-phone-set-up/tracked-phone-set-up.module#TrackedPhoneSetUpPageModule' },
  { path: 'tracked-phone-status', loadChildren: './tracked-phone-status/tracked-phone-status.module#TrackedPhoneStatusPageModule' },
  { path: 'master-phone-dashboard', loadChildren: './master-phone-dashboard/master-phone-dashboard.module#MasterPhoneDashboardPageModule' },
  { path: 'tracked-phone-list', loadChildren: './tracked-phone-list/tracked-phone-list.module#TrackedPhoneListPageModule' },
  { path: 'tracked-phone-details', loadChildren: './tracked-phone-details/tracked-phone-details.module#TrackedPhoneDetailsPageModule' },
  { path: 'tracked-phone-settings', loadChildren: './tracked-phone-settings/tracked-phone-settings.module#TrackedPhoneSettingsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
