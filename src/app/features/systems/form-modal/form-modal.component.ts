import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { System } from '../../../shared/models/interfaces';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Input() system: System | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onFormSubmitted = new EventEmitter<void>();

  safeFormUrl: SafeResourceUrl | null = null;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', this.handleMessage.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('message', this.handleMessage.bind(this));
    }
  }

  ngOnChanges(): void {
    if (this.system?.formUrl) {
      this.safeFormUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
        this.system.formUrl
      );
    } else {
      this.safeFormUrl = null;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.close();
  }

  close(): void {
    this.onClose.emit();
  }

  simulateFormSubmission(): void {
    this.onFormSubmitted.emit();
  }

  private handleMessage(event: MessageEvent): void {
    if (event.data === 'form:sended') {
      this.onFormSubmitted.emit();
    }
  }
}
