import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/interfaces';
import { Role } from '../../shared/models/role.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoryFilterService {
  filterCategoriesByRole(categories: Category[], role: string): Category[] {
    if (!role) {
      return categories;
    }

    if (!Object.values(Role).includes(role as Role)) {
      return [];
    }

    return categories.filter((category) => {
      if (!category.allowedRoles || category.allowedRoles.length === 0) {
        return false;
      }
      return category.allowedRoles.includes(role);
    });
  }
}
