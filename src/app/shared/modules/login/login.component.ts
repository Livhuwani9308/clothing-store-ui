import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
import { ROLES } from '../../../models/constants';
import { AuthService } from '../../../frontend/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, RouterModule, FormsModule],
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  passwordFieldType: string = 'password';
  isAdmin: boolean = false;
  isAdminPortal: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isAdminPortal = this.router.url.startsWith('/admin');
  }

  model: any = {};

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      loginForm.form.markAllAsTouched();
      return;
    }

    this.authService.login(this.model).subscribe({
      next: (response: any) => {
        if (response.isSuccess) {
          if (response?.data.role.toLowerCase() === ROLES.ADMIN) {
            this.isAdmin = true;
            if (this.isAdminPortal) {
              this.router.navigate(['/dashboard']);
              this.toastr.success('Login successful.');
            } else {
              this.router.navigate(['/home']);
              this.toastr.success('Login successful.');
            }
          } else {
            this.router.navigate(['/home']);
            this.toastr.success('Login successful.');
          }
        } else {
          this.toastr.error('Invalid request.');
        }
      },
      error: (error: any) => this.toastr.error(error.error.message)
    })
  }
}
