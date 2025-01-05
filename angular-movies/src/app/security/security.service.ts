import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {

  constructor() { }

  isLoggedIn(): boolean {
    return false;
  }

  getRole(): string {
    return '';
  }
}
