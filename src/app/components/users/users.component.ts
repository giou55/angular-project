import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.users = this.userService.getUsers();

      // this.userService.updateMessage.subscribe(users => {
      //   this.users = users;
      // });
  }


}
