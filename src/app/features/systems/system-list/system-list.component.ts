import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { FormModalComponent } from '../form-modal/form-modal.component';
import {
  CATEGORIES,
  Category,
  System,
} from '../../../shared/constants/app-data.constants';

@Component({
  selector: 'app-system-list',
  standalone: true,
  imports: [
    CommonModule,
    LoadingSpinnerComponent,
    FormModalComponent,
  ],
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss'],
})
export class SystemListComponent implements OnInit {
  category: Category | null = null;
  loading = false; // Iniciar en false para eliminar el problema
  showModal = false;
  selectedSystem: System | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    console.log('🔧 SystemListComponent constructor called');
  }

  ngOnInit(): void {
    console.log('🚀 SystemListComponent ngOnInit called');
    this.route.params.subscribe((params) => {
      console.log('📋 Route params:', params);
      const categoryId = params['id'];
      console.log('🔍 Category ID from route:', categoryId);
      console.log('📚 CATEGORIES available:', CATEGORIES);
      
      this.category = CATEGORIES.find((cat) => cat.id === categoryId) || null;
      console.log('🎯 Found category:', this.category);

      if (!this.category) {
        console.log('❌ Category not found, redirecting to home');
        this.router.navigate(['/']);
        return;
      }

      console.log('✅ Category found successfully!');
      console.log('📊 Category systems:', this.category.systems);
      console.log('🔢 Systems count:', this.category.systems.length);
      console.log('🔄 Final state - loading:', this.loading, 'category:', this.category?.name);
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  openSystemForm(system: System): void {
    this.selectedSystem = system;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedSystem = null;
  }

  onFormSubmitted(): void {
    this.closeModal();
    // Mostrar mensaje de éxito y redirigir
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  trackBySystem(index: number, system: System): string {
    return system.id;
  }
}
