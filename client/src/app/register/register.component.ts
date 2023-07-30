import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Input() usersFromHomeComponent: any;
  model: any = {}
 
  constructor(private accountService: AccountService) {

    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(){
   this.accountService.register(this.model).subscribe({
    next: () => {
      this.cancel();
    },
    error: error => console.log(error)
   })
  }

  cancel(){
    console.log('cancelled')
  }

}
