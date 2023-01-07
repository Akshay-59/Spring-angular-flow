import { Component, OnInit, Input, Output} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit{
  contact: { id: any; firstName: any; lastName: any; email: any } = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(public dataService: DataService) {}

  ngOnInit() {}
  /*
  createContact() {
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = { id: null, name: '', description: '', email: '' };
  } */

  createContact(): any {
    console.log('inside create contact');
    this.dataService.createContact(this.contact).subscribe((resData: any) => {
      console.log('resData', resData);
    });
  }
}