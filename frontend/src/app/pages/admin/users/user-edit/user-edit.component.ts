import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService }                from '../../../../services/users.service';
import { User }                        from '../../../../models/user.model';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  form: FormGroup;
  loading = false;
  error   = false;
  success = false;
  userId!: number;
  roles = ['ADMIN', 'CLIENT', 'BODEGUERO'];

  constructor() {
    this.form = this.fb.nonNullable.group({
      name:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role:  ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser();
  }

  loadUser() {
    this.loading = true;
    this.error   = false;
    this.usersService.getById(this.userId).subscribe({
      next: (u: User) => {
        this.form.patchValue({
          name:  u.name,
          email: u.email,
          role:  u.role
        });
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error   = false;
    const update: Partial<User> = {
      name:  this.form.value.name,
      email: this.form.value.email,
      role:  this.form.value.role
    };
    this.usersService.update(this.userId, update).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        setTimeout(() => this.success = false, 3000);
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }
}
