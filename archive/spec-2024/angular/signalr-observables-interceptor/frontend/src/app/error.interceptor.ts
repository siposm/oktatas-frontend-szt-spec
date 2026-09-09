import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { environment } from '../environments/environment.development';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // Bearer token csak a DELETE kérésekhez
  let request = req
  if (req.method === "DELETE") {
    const token = localStorage.getItem(environment.tokenKey)
    if (token) {
      request = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }
  }

  return next(request).pipe(
    catchError((err: HttpErrorResponse) => {
      let userMessage = "Ismeretlen hiba történt."

      if (err.status === 0) {
        // hálózati/CORS/szerver nem elérhető
        userMessage = "Hálózati hiba: a szerver nem elérhető (CORS vagy offline)."
      } else if (err.status === 401) {
        userMessage = "A munkamenet lejárt vagy érvénytelen. Jelentkezz be újra."
        localStorage.removeItem(environment.tokenKey)
        // opcionális: átirányítás
        // opcionális: refresh token kérvényezése
      } else if (err.status === 403) {
        userMessage = "Nincs jogosultságod a művelethez."
      } else if (err.status === 404) {
        userMessage = "Az erőforrás nem található."
      } else if (err.status >= 500) {
        userMessage = "Szerverhiba történt. Próbáld meg később."
      } else if (err.error?.message || err.error?.error) {
        userMessage = err.error.message ?? err.error.error
      }
      // de akár az error objektumban érkező backend hibaüzenetet is meg lehet jeleníteni...

      console.error("[HTTP ERROR]", {
        method: req.method,
        url: req.urlWithParams,
        status: err.status,
        error: err
      });

      // todo: innen lehet toast üzeneteket feldobni, érdemes erre külön servicet létrehozni

      // barátságos üzenet átadása a hibában
      (err as any).userMessage = userMessage
      return throwError(() => err) // tovább is dobja a hibát, hogy a hívó komponens is tudjon róla
    }),
    finalize(() => {
      // ide jöhetne pl. egy globális loader elrejtése
    })
  )
}