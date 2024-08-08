import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
    MatCardModule, HeaderComponent],
  providers: [provideNativeDateAdapter(), HttpClientModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      dateOfBirth: [''],
      gender: [''],
      interestFitness: [false],
      interestMindfulness: [false],
      interestProductivity: [false],
      cycleTracking: [false],
      language: ['english'],
      newsletter: [false],
      terms: [false]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.signupForm.valid) {

      this.userService.signUp(this.signupForm.value).subscribe(response => {
        console.log('User created:', response);
      }, error => {
        console.error('Error creating user:', error);
      });
    } else {
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}