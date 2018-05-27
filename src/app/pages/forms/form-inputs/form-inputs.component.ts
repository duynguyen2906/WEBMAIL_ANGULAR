import { Component } from '@angular/core';
import { EmailService } from '../../../email.service';
import { Email} from '../../../../model/email';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  constructor(private emailService : EmailService){
    
  }
 
  add(Subject: string, Mail : string, Name: string, Message: string,): void {
    
    const newMovie: Email = new Email();
    newMovie.subject = Subject;
    newMovie.email = Mail;
    newMovie.name = Name;
    newMovie.message = Message;
    this.emailService.addEmail(newMovie);
}
}

