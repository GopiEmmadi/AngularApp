import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @ViewChild('inputField') inputField?: ElementRef;
  userName: string = 'sensei';
  userAge: number = 40;
  userEmail: string = 'kshk@gmail.com';
  flagName: boolean=false;
  flagAge: boolean=false;
  flagEmail: boolean=false;
  changeName(): void {
    // Implement the logic to change the user's name here
    this.userName = '';

    if (this.inputField?.nativeElement) {
      this.inputField.nativeElement.focus();
    }
  }
  onName(){
   if (!this.userName) {
      this.userName='';
      this.flagName=true;
   }
   else {
      this.flagName=false;
   }
  }
  onAge(){
   if (!this.userAge) {
      this.userAge=0;
      this.flagAge=true;
   }
   else {
      this.flagAge=false;
   }
  }
  onChange(){
   if (!this.userEmail.endsWith('@gmail.com')) {
      this.userEmail='';
      this.flagEmail=true;
   }
   else {
      this.flagEmail=false;
   }
  }
}
