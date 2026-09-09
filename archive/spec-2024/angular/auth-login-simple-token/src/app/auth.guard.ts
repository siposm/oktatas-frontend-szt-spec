import { CanActivateFn } from '@angular/router';
import { environment } from '../environments/environment.development';

export const authGuard: CanActivateFn = (route, state) => {
  const value = localStorage.getItem(environment.tokenKey)
  if (!value) return false
  return value.length > 10
};
