import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  getLocale() {
    return 'pt-BR';
  }

  constructor() {}
}
