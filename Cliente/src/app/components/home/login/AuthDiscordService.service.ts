import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDiscordService {
  private clientId = '1293484425920778331';
  private clientSecret = 'kNJpcsxvAwcMDjtT61iQuGAy6PlBPtYY';
  private redirectUri = 'http://localhost:4200/menu';
  private authUrl = 'https://discord.com/oauth2/authorize?client_id=1293484425920778331&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fmenu&scope=identify+email+guilds+connections+activities.read+relationships.read';
  private tokenUrl = 'https://discord.com/api/oauth2/token';
  private apiUrl = 'https://discord.com/api/users/@me';

  private userProfileSubject = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const url = `https://discord.com/oauth2/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri
      
    )}&response_type=code&scope=identify%20email%20guilds%20connections`;
    window.location.href = url;
  }

  handleRedirect() {
    const code = this.getCodeFromUrl();
    if (code) {
      this.getToken(code);
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private getCodeFromUrl(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get('code');
  }

  private getToken(code: string) {
    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', this.redirectUri);
  
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  
    this.http.post<TokenResponse>(this.tokenUrl, body.toString(), { headers })
      .subscribe(response => {
        console.log('Token recibido:', response);
        localStorage.setItem('token', response.access_token);
        this.getUserProfile(response.access_token);
        this.router.navigate(['/menu']);
      }, error => {
        console.error('Error al obtener el token:', error);
        alert('Error al iniciar sesión. Intenta nuevamente.');
      });
  }

  getUserProfile(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get(this.apiUrl, { headers }).subscribe(
      (profile: any) => {
        console.log('Perfil del usuario:', profile); // Verifica que el campo locale esté presente
        this.userProfileSubject.next(profile);
        this.getUserConnections(token); // Asegúrate de que esto se llama para obtener conexiones
      },
      error => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }

  getUserConnections(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get('https://discord.com/api/users/@me/connections', { headers }).subscribe(
      (connections: any) => {
        console.log('Conexiones del usuario:', connections);
        this.userProfileSubject.next({ ...this.userProfileSubject.value, connections });
      },
      error => {
        console.error('Error al obtener las conexiones del usuario:', error);
      }
    );
  }

  loginWithDiscord() {
    this.login();
  }
}

interface TokenResponse {
  access_token: string;
  // Agrega otras propiedades que necesites de la respuesta
}
