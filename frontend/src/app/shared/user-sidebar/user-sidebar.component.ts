import { AuthService } from './../../core/services/auth.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  constructor(private authService: AuthService) {}
  @Input() show = false;
  @Input() user: any;
  @Output() closeSidebar = new EventEmitter<void>();

  cerrarSesion() {
    this.authService.logout();
    window.location.reload(); 
  }

}