import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../core/services/account.service';
import {Account} from '../../core/models/account';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonationService} from '../../core/services/donation.service';
import {Donation} from '../../core/models/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private accountService: AccountService,
              private donationService: DonationService) {
  }

  username: string;
  currentUser: Account;
  tempDonation: Donation;
  responseDonation: Donation;
  isDonated = false;

  donationForm = new FormGroup({
    sender_name: new FormControl(''),
    message: new FormControl(''),
    amount: new FormControl('')
  });

  ngOnInit(): void {
    this.username = this.activateRoute.snapshot.params['username'];
    this.accountService.getAccountByUsername(this.username).subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
      if (!this.currentUser) {
        this.router.navigate(['../../']).then(() => {
          window.location.reload();
        });
      }
    });
  }

  donate() {
    this.tempDonation = this.donationForm.getRawValue();
    this.tempDonation.receiver_id = this.currentUser.id;
    console.log(this.tempDonation);
    this.donationService.createDonation(this.tempDonation).subscribe(res => {
      this.responseDonation = res;
      this.isDonated = true;
      console.log('res', res);
      console.log('responseDonation', this.responseDonation);
    });
  }

  close() {
    this.isDonated = false;
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
