import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import {
  CATEGORIES,
  ICONS,
  Category,
} from '../../../shared/constants/app-data.constants';

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

  constructor(private router: Router) {
    console.log('CategoryListComponent constructor called');
    console.log('CATEGORIES from import:', CATEGORIES);
  }

  ngOnInit(): void {
    // Asignar categorías en ngOnInit
    this.categories = CATEGORIES;
    console.log('ngOnInit called');
    console.log('Categories assigned:', this.categories);
    console.log('Categories length:', this.categories.length);
  }

  navigateToSystems(categoryId: string): void {
    console.log('🚀 Navigating to category:', categoryId);
    console.log('🛣️ Route will be: /category/' + categoryId);
    this.router.navigate(['/category', categoryId]);
    console.log('✅ Navigation command sent');
  }

  getIcon(iconName: string): string {
    return this.icons[iconName as keyof typeof this.icons] || this.icons.folder;
  }

  trackByCategory(index: number, category: Category): string {
    return category.id;
  }
}
