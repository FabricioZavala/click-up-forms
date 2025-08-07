import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Role } from '../../shared/models/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private router: Router) {}

  getCurrentRole(): Observable<string | null> {

    const urlTree = this.router.parseUrl(this.router.url);
    const role = urlTree.queryParams['role'] || null;

    return new Observable((observer) => {
      observer.next(role);
      observer.complete();
    });
  }

  isValidRole(role: string): boolean {
    return Object.values(Role).includes(role as Role);
  }

  navigateWithRole(path: string[], role: string): void {
    this.router.navigate(path, { queryParams: { role } });
  }
}
