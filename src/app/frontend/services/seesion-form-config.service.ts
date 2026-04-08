import { Injectable } from '@angular/core';

export interface SessionFormConfig {
  id: number | null;
  mode: 'create' | 'view' | 'edit' | '';
}

@Injectable({
  providedIn: 'root'
})
export class SessionFormConfigService {
  /* USAGE:
  
  ngOnInit() {
    const config = this.sessionFormConfigService.get();

    if (config.mode === 'view') {
      this.loadSession(config.id!);
    }
  }

  ngOnDestroy() {
    this.sessionFormConfigService.clear();
  } */

  private readonly STORAGE_KEY = 'form-config';

  set(config: SessionFormConfig): void {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
  }

  get(): SessionFormConfig {
    const stored = sessionStorage.getItem(this.STORAGE_KEY);

    if (!stored) {
      return { id: null, mode: '' };
    }
    return JSON.parse(stored);
  }

  clear(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
  }
}
