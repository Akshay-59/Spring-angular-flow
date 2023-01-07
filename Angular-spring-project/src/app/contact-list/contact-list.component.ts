import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: any;
  selectedContact: any;

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllContacts();
    console.log('In OnInit');
    //this.onSelect(this.selectedPhysician.id);
  }
  getAllContacts() {
    this.dataService.getAllContacts().subscribe((data: any) => {
      this.contacts = data;
      console.log('data', data);
    });
  }
}