import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';

  addMember() {
    if (this.newMemberName === '') {
      // (!this.newMembername) also works! (being falsy means it's empty string)
      this.errorMessage = 'Name cannot be empty';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }

  onInput(member: string): void {
    this.newMemberName = member;
  }
}
