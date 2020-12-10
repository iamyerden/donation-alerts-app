import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DonationComponent} from './donation/donation.component';
import {SearchAccountComponent} from './search-account/search-account.component';

const routes: Routes = [
  {
    path: '',
    component: SearchAccountComponent
  },
  {
    path: 'donate/:username',
    component: DonationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
