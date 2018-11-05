import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private af: AngularFireDatabase) { }

  public map: any = { lat: -38.674573, lng: -72.502329, label: 'Muebles San Pedro'};
  zoom: number = 15;

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const name = value.name;
    const email = 'ignaciocarvajald@gmail.com';
    const message = value.content;
    const subject = value.subject;
    const emailContact = value.email;

    let formRequest = { name, email, subject, message, emailContact};
    this.af.list('/messages').push(formRequest);
    form.reset();

}
}
