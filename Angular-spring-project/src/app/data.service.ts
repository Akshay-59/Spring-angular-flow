import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private geturl = 'http://localhost:8080/students';
  constructor(private http: HttpClient) {}

  /* public createContact(contact: {
    id: any;
    name: any;
    description: any;
    email: any;
  }) {
    this.contacts.push(contact);
  } */

  ngOnInit(): void {}
  getAllContacts(): Observable<any[]> {
    console.log('inside get all contacts');
    return this.http.get<any>(this.geturl);
  }

  public createContact(contact: any): Observable<any> {
    console.log('inside');
    return this.http.post<any>(this.geturl, contact);
  }
}
