import { Component, OnInit } from '@angular/core';
import { Responze } from 'src/app/interface/responze.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  response: Responze;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers(20).subscribe(
      (results: Responze) => {
        this.response = results;
      }
    );
  }

}
