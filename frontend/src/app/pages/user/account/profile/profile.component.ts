import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { UsersService }               from '../../../../services/users.service';
import { UserProfile }                from '../../../../models/user-profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private fb = inject(FormBuilder);
  private usersService = inject(UsersService);

  profile?: UserProfile;
  loading = false;
  error   = false;
  editAdditional = false;
  form: FormGroup;

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

  saveAdditional(): void {
    if (this.form.invalid || !this.profile) return;
    this.loading = true;
    this.usersService.updateProfile(this.form.value).subscribe({
      next: p => {
        this.profile = { ...this.profile!, ...p };
        this.editAdditional = false;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
