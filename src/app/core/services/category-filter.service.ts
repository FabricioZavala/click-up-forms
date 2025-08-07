import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoryFilterService {
  filterCategoriesByRole(categories: Category[], role: string): Category[] {
    if (!role) {
      return categories;
    }

    return categories.filter((category) => {
      if (!category.allowedRoles || category.allowedRoles.length === 0) {
        return false;
      }
      return category.allowedRoles.includes(role);
    });
  }
}
