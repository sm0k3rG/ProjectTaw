import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { UsersService }      from '../../../../services/users.service';
import { User }              from '../../../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
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
    // no cargamos hasta que el admin pulse el botón
  }

  onViewClick(): void {
    this.loading = true;
    this.error   = false;
    this.usersService.getAll()  // o getAllUsers() según tu servicio
      .subscribe({
        next: list => {
          this.users = list.sort((a, b) =>
            a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
          );
          this.loading = false;
          this.showList = true;
        },
        error: () => {
          this.error   = true;
          this.loading = false;
        }
      });
  }
}
