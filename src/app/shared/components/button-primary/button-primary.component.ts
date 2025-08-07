import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent {
  @Input() variant: 'filled' | 'outline' | 'gradient' = 'filled';
  @Input() disabled = false;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color = 'primary';
  @Input() fullWidth = false;
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 transform active:scale-95 shadow-lg hover:shadow-xl';

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const colorClasses = {
      primary: {
        filled:
          'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500',
        outline:
          'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        gradient:
          'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-purple-500',
      },
      success: {
        filled:
          'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 focus:ring-green-500',
        outline:
          'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
        gradient:
          'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-emerald-500',
      },
      danger: {
        filled:
          'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500',
        outline:
          'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
        gradient:
          'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 focus:ring-pink-500',
      },
    };

    const widthClass = this.fullWidth ? 'w-full' : '';
    const disabledClass = this.disabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : 'hover:scale-105';

    const colorSet =
      colorClasses[this.color as keyof typeof colorClasses] ||
      colorClasses.primary;
    const variantClass = colorSet[this.variant] || colorSet.filled;

    return `${baseClasses} ${
      sizeClasses[this.size]
    } ${variantClass} ${widthClass} ${disabledClass}`;
  }

  onButtonClick(event: Event): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
