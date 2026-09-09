import { Injectable } from '@angular/core';
import { LoginModel } from './models/login-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { JwtPayload } from './models/jwt-payload';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel): void {
    this.http.post<{ token: string }>(environment.apis.login, loginModel)
      .subscribe(res => {
        const token = res?.token
        if (!token) {
          console.error('Login response nem tartalmaz token-t.')
          return
        }
        localStorage.setItem(environment.tokenKey, token) // <--- NYERS JWT
      })
  }

  logout(): void {
    const token = localStorage.getItem(environment.tokenKey)

    localStorage.removeItem(environment.tokenKey)

    if (token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` })
      this.http.post(environment.apis.logout, {}, { headers }).subscribe({
        next: () => { console.log("Logged out successfully!") },
        error: () => { console.log("Error during logout!") }
      })
    }
  }

  // Van-e érvényes token (exp > now)?
  isLoggedIn(): boolean {
    const token = this.getToken()
    if (!token) return false
    const payload = this.getPayload(token)
    if (!payload?.expiration) return true // ha nincs exp, akkor a puszta jelenlétet vesszük
    const nowSec = Math.floor(Date.now() / 1000)
    return payload.expiration > nowSec
  }

  // Jelenlegi felhasználói szerepek
  getRoles(): string[] {
    const token = this.getToken()
    if (!token) return []
    const payload = this.getPayload(token)
    if (!payload) return []
    const raw = payload.roles ?? []
    return Array.isArray(raw) ? raw : [raw]
  }

  // Rendelkezik-e legalább egy szükséges szereppel?
  hasRole(required: string | string[]): boolean {
    const have = this.getRoles().map(r => r.toUpperCase())
    const need = (Array.isArray(required) ? required : [required]).map(r => r.toUpperCase())
    return need.some(r => have.includes(r))
  }

  getToken(): string | null {
    return localStorage.getItem(environment.tokenKey)
  }

  private getPayload(token: string): JwtPayload | null {
    try {
      const base64url = token.split('.')[1] ?? ''
      const json = this.base64UrlDecode(base64url)
      return JSON.parse(json) as JwtPayload
    } catch {
      return null
    }
  }

  private base64UrlDecode(input: string): string {
    const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
    const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4))
    const s = atob(base64 + pad)
    return decodeURIComponent(
      s.split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join('')
    )
  }
}
