import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private readonly PUBLIC_ACCOUNT = '/public/donation';
  private readonly PRIVATE_ACCOUNT = '/private/donation';

  constructor(private http: HttpClient) { }

  getAllDonations(): Observable<any> {
    return this.http.get(`${this.PUBLIC_ACCOUNT}/read/all/iterable`);
  }

  getDonation(id: number): Observable<any> {
    return this.http.get(`${this.PUBLIC_ACCOUNT}/read/${id}`);
  }

  createDonation(donation: any): Observable<any> {
    return this.http.post(`${this.PUBLIC_ACCOUNT}/create`, donation);
  }

  updateDonation(donation: any): Observable<any> {
    return this.http.put(`${this.PUBLIC_ACCOUNT}/update`, donation);
  }

  deleteDonation(id: number): Observable<any> {
    return this.http.delete(`${this.PUBLIC_ACCOUNT}/delete/${id}`);
  }
}
