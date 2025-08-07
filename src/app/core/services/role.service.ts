import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Role } from '../../shared/models/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private route: ActivatedRoute, private router: Router) {}

  getCurrentRole(): Observable<string | null> {
    return this.route.queryParams.pipe(
      map((params) => {
        return params['role'] || null;
      })
    );
  }

  isValidRole(role: string): boolean {
    return Object.values(Role).includes(role as Role);
  }

  navigateWithRole(path: string[], role: string): void {
    this.router.navigate(path, { queryParams: { role } });
  }
}
