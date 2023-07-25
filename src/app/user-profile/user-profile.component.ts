import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = 'John Doe';
  userAge: number = 30;
  userEmail: string = 'johndoe@example.com';

  changeName(): void {
    // Implement the logic to change the user's name here
    this.userName = 'Jane Smith';
  }
}
