import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormConfig } from '../../shared/models/config.types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly configUrl = '/assets/form-config.json';

  constructor(private http: HttpClient) {}

  getConfig(): Observable<FormConfig> {
    return this.http.get<FormConfig>(this.configUrl);
  }
}
