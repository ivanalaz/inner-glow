import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { GuestGuard } from './guest.guard';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent, canActivate: [GuestGuard] },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    // Public routes
    { path: '', component: HomeComponent, canActivate: [GuestGuard] },
    // Protected routes
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
        { path: 'dashboard', component: DashboardComponent },
        // { path: 'profile', component: ProfileComponent },
        { path: 'settings', component: FeaturesComponent },
        // Add other protected routes here
      ]
    },
    { path: '**', redirectTo: '' } // Redirect unknown paths to home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configures the router with routes and makes router services available
    exports: [RouterModule] // Makes router directives available to other modules that import AppRoutingModule
})
export class AppRoutingModule {}