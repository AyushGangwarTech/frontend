import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-find-donor',
  imports: [FormsModule],
  templateUrl: './find-donor.html',
  styleUrl: './find-donor.css',
})
export class FindDonor {

  bloodgroups = [
    'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
  ];

  city: string = '';
  bloodGroup: string = '';

  donors = signal<any[]>([]);
  loading = false;
  searched = false;

  constructor(private router: Router, private userService: User) { }

  search() {
    

    if (!this.city || !this.bloodGroup) {
      this.donors.set([]);
      this.searched = true;
      return;
    }

    this.loading = true;
    this.searched = true;

    this.donors.set([]);

    console.log('Before API call:', this.city, this.bloodGroup);

    this.userService.findDonor(this.city, this.bloodGroup).subscribe({
      next: (data: any[]) => {
        console.log('API response:', data);

        this.donors.set(data.map(d => ({
          ...d,
          requested: false
        })));

        this.loading = false;

      },
      error: (err) => {
        console.log('Error fetching donors:', err);
        this.loading = false;
      }
    });
  }

  onInputChange() {
    this.searched = false;

  }
  requestBlood(donor: any) {
    donor.requested = true;
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
