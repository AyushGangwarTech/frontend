import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private router = inject(Router);

  bloodgroups = [
    'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
  ];

  user = {
    name: '',
    age: null,
    bloodGroup: '',
    city: '',
    phone: '',
    email: ''
  };

  constructor(private userService: User) { }

  register(form: any) {
    if (form.valid) {
      this.userService.registerUser(this.user).subscribe({
        next: (res) => {
          console.log('Response from backend:', res);

          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log('Registration failed:', err);
        }
      });


    }

  }
}
