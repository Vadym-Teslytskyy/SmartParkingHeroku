import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../clients/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordData } from '../client-profile-edit-password/password-data';
import { InfoResponse } from '../../auth/info-response';
import { MatSnackBar } from '@angular/material';

const NEW_PASSWORD = 'new_password';
const UUID_PASSWORD_CONFIRM = 'uuid_password_confirm';

@Component({
  selector: 'app-client-password-change-confirmation',
  templateUrl: './client-password-change-confirmation.component.html',
  styleUrls: ['./client-password-change-confirmation.component.css']
})
export class ClientPasswordChangeConfirmationComponent implements OnInit {

  isChanging: boolean = false;
  isError: boolean= false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    const localUUID:string = window.localStorage.getItem(UUID_PASSWORD_CONFIRM);
    const pathUUID = this.route.snapshot.paramMap.get('uuid');

    if(localUUID == pathUUID){
      const data: PasswordData = new PasswordData();
      data.password = window.localStorage.getItem(NEW_PASSWORD);
      data.confirmPassword = window.localStorage.getItem(NEW_PASSWORD);
      this.clientService.updateClientPassword(data).subscribe((response: InfoResponse) => {
        this.snackBar.open('Password changed successfully!', null, {
          duration: 4000
        });
        window.localStorage.removeItem(UUID_PASSWORD_CONFIRM);
        window.localStorage.removeItem(NEW_PASSWORD);
        this.isChanging = true;
      },
       error =>{
        this.snackBar.open('Password changing Error! Try again', null, {
            duration: 4000
          });
          this.isError=true;
      });;
    }else{
      this.router.navigate(['/']);
    }
  }

}
