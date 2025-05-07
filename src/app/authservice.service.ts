import { Injectable } from '@angular/core';
import { roleGuard } from './guard/role.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor() {}

  isLoggedIn = false;
  isAdmin = false;
  isUser = false;

  login(username: string, email: string, password: string, role: string) {
    localStorage.setItem(
      'details',
      JSON.stringify({ username, email, password, role })
    );
    console.log(role);
    console.log('Login successful');
  }
  getRole(): string | null {
    const userDetails = localStorage.getItem('details');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user.role;
    }

    return null;
  }
}
