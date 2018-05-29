import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { EmailService } from '../../../email.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  
  emails: Observable<any>;
  constructor(private emailService: EmailService,private http: HttpClient) {
  }
  ngOnInit(){

    this.emailService.getData().subscribe(value => {this.emails=value});

  }
}
