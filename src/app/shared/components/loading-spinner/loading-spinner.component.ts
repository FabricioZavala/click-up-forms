import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color = 'primary';
  @Input() message = '';

  get spinnerClasses(): string {
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24',
    };

    const colorClasses = {
      primary: 'border-blue-600',
      success: 'border-green-600',
      danger: 'border-red-600',
      warning: 'border-yellow-600',
    };

    return `${sizeClasses[this.size]} ${
      colorClasses[this.color as keyof typeof colorClasses] ||
      colorClasses.primary
    }`;
  }
}
