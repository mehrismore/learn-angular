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
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

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

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }
    const allMembers = [...this.members]; //destructuring everything inside members array to make a copy of it, so that we won't mutate the actual array later in the process.

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0]; //array of one item, gives us the number

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
  }
}
