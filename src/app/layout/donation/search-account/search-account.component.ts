import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.scss']
})
export class SearchAccountComponent implements OnInit {

  username: string;
  account: any;
  accountList: any;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
  }

  filterItem(value) {
    if (value) {
      this.username = value;
      console.log('value:', value);
      this.accountService.searchAccounts(value).subscribe(res => {
        this.accountList = res;
        console.log(res);
        // if (this.account) {
        //   this.router.navigate(['donate/' + this.account.username]);
        // }
      });
    }
  }

  donationPage(username: string) {
    this.router.navigate(['donate/' + username]);
  }

}
