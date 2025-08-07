import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CATEGORIES } from '../../../shared/constants/app-data.constants';
import { ICONS } from '../../../shared/constants/icons.constants';
import { Category } from '../../../shared/models/interfaces';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  icons = ICONS;
  loading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

  navigateToSystems(categoryId: string): void {
    this.router.navigate(['/category', categoryId]);
  }

  getIcon(iconName: string): string {
    return this.icons[iconName as keyof typeof this.icons] || this.icons.folder;
  }

  trackByCategory(index: number, category: Category): string {
    return category.id;
  }
}
