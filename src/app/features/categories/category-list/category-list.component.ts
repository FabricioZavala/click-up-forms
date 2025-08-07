import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CATEGORIES } from '../../../shared/constants/app-data.constants';
import { ICONS } from '../../../shared/constants/icons.constants';
import { Category } from '../../../shared/models/interfaces';
import { RoleService } from '../../../core/services/role.service';
import { CategoryFilterService } from '../../../core/services/category-filter.service';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  icons = ICONS;
  loading = false;
  searchTerm = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RoleService,
    private categoryFilterService: CategoryFilterService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;

    this.roleService.getCurrentRole().subscribe((userRole) => {
      this.categories = this.categoryFilterService.filterCategoriesByRole(
        CATEGORIES,
        userRole || ''
      );
      this.filteredCategories = [...this.categories];
      this.loading = false;
    });
  }

  onSearch(): void {
    this.filteredCategories = this.categories.filter(
      (category: Category) =>
        category.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        category.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
  }

  navigateToSystems(categoryId: string): void {
    this.navigationService.navigateToCategory(categoryId);
  }

  getIcon(iconName: string): string {
    return this.icons[iconName as keyof typeof this.icons] || this.icons.folder;
  }

  onImageError(event: any, category: Category): void {
    event.target.style.display = 'none';
    const parentDiv = event.target.parentElement;
    parentDiv.innerHTML = `<div class="w-full h-full text-white">${this.getIcon(
      category.icon
    )}</div>`;
  }

  trackByCategory(index: number, category: Category): string {
    return category.id;
  }
}
