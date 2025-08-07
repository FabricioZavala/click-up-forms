import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RoleService } from '../services/role.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  const role = route.queryParams['role'];

  console.log('Role Guard - checking role:', role);

  if (!role) {
    console.log('No role parameter found');
    return true; // Permitir acceso para mostrar mensaje de error
  }

  if (!roleService.isValidRole(role)) {
    console.log('Invalid role:', role);
    return true; // Permitir acceso para mostrar mensaje de error
  }

  console.log('Role guard passed for role:', role);
  return true;
};
