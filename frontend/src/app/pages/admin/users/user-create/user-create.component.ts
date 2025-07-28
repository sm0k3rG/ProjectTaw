import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  form: FormGroup;
  loading = false;
  success = false;
  error = false;
  roles = ['ADMIN', 'CLIENT'];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      name:     ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role:     ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = false;

    this.usersService.create(this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        // Redirigir al listado tras 2s
        setTimeout(() => this.router.navigate(['/admin/users']), 2000);
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}

