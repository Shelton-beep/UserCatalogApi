import { Component, OnInit } from '@angular/core';
import { Responze } from 'src/app/interface/responze.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  response: Responze;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers(15).subscribe(
      (results: Responze) => {
        this.response = results;
      }
    );
  }

}
