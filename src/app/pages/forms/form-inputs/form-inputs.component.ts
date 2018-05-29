import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../email.service';
import { Email} from '../../../../model/email';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable, Subject } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  starRate = 2;
  heartRate = 4;
  private emailURL='http://localhost:3000/email';
  emails: Observable<any>;
  constructor(private emailService : EmailService){
  }
 
  add(Subject: string, Mail : string, Name: string, Message: string,): void {
  this.emailService.addEmail(Subject, Mail, Name, Message);   
}
}

