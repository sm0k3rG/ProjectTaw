import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { UsersService }      from '../../../../services/users.service';
import { User } from '../../../../models/user.model';
import { MainNavbarComponent } from '../../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MainNavbarComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error   = false;
  showList = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getAll()
      .subscribe(users => {
        this.users = users;
      });
  }
}
