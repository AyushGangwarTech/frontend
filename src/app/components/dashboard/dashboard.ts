import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private router = inject(Router);
  private userService = inject(User);

  user = signal<any>(null);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getLatestUser().subscribe({
      next: (res) => {
        console.log('Dashboard user:', res);
        this.user.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.log('Error loading user:', err);
        this.loading.set(false);
      }
    });
  }

  gotofinddonor() {
    this.router.navigate(['/find-donor'])
  };
}

