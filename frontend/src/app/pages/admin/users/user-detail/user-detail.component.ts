import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService }               from '../../../../services/users.service';
import { User }                       from '../../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  user?: User;
  loading = false;
  error   = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser(id);
  }

  loadUser(id: number) {
    this.loading = true;
    this.error   = false;
    this.usersService.getById(id).subscribe({
      next: u => {
        this.user    = u;
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }
}
