import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly PUBLIC_ACCOUNT = '/public/account';
  private readonly PRIVATE_ACCOUNT = '/private/account';

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.PUBLIC_ACCOUNT}/read/all/iterable`);
  }

  getAccountById(id): Observable<any> {
    return this.http.get(`${this.PUBLIC_ACCOUNT}/read/${id}`);
  }

  getAccountByUsername(username: string): Observable<any> {
    return this.http.get(`${this.PUBLIC_ACCOUNT}/read?username=${username}`);
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.PUBLIC_ACCOUNT}/create`, account);
  }

  updateAccount(account: any): Observable<any> {
    return this.http.put(`${this.PUBLIC_ACCOUNT}/update`, account);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.PUBLIC_ACCOUNT}/delete/${id}`);
  }
}
