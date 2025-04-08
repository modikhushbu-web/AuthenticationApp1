
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginComponent } // Define login route
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) 
 ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
