import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Router, RouterModule }       from '@angular/router';
import { UsersService }               from '../../../../services/users.service';
import { UserProfile }                from '../../../../models/user-profile.model';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private usersService = inject(UsersService);
  private router = inject(Router);

  form: FormGroup;
  profile?: UserProfile;
  loading = false;
  error   = false;
  success = false;

  constructor() {
    this.form = this.fb.nonNullable.group({
      altPhone:         [''],
      secondaryAddress: [''],
      deliveryPrefs:    ['']
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getProfile().subscribe({
      next: p => {
        this.profile = p;
        this.form.patchValue(p);
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.usersService.updateProfile(this.form.value).subscribe({
      next: p => {
        this.success = true;
        this.loading = false;
        setTimeout(() => this.router.navigate(['/account']), 2000);
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }
}
