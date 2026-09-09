import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  // 1) be van-e jelentkezve (exp alapján is)
  if (!auth.isLoggedIn()) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false
  }

  // 2) ha a route megkövetel szerepet
  const required = route.data?.['roles'] as string[] | string | undefined
  if (required && !auth.hasRole(required)) {
    // nincs jogosultság
    router.navigate(['/login'], { queryParams: { reason: 'forbidden' } })
    return false
  }
  return true
}
