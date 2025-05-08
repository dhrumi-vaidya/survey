import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { inject } from '@angular/core';
export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);
  const expectedRole = route.data?.['expectedRole'];
  const userRole = authService.getRole();
  if (userRole === expectedRole) {
    return true;
  } else {
    alert('Access denied');
    localStorage.clear();
    return router.navigate(['/']);
  }
};
