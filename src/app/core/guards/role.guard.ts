import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RoleService } from '../services/role.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  const role = route.queryParams['role'];

  if (!role) {
    return true;
  }

  if (!roleService.isValidRole(role)) {
    return true;
  }

  return true;
};
