import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { CATEGORIES } from '../../../shared/constants/app-data.constants';
import { Category, System } from '../../../shared/models/interfaces';

@Component({
  selector: 'app-system-list',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent, FormModalComponent],
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss'],
})
export class SystemListComponent implements OnInit {
  category: Category | null = null;
  loading = false;
  showModal = false;
  selectedSystem: System | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryId = params['id'];

      this.category = CATEGORIES.find((cat) => cat.id === categoryId) || null;

      if (!this.category) {
        this.router.navigate(['/']);
        return;
      }
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
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  trackBySystem(index: number, system: System): string {
    return system.id;
  }
}
