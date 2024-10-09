import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthDiscordService {
  private clientId = '1293484425920778331'; 
  private clientSecret = '2yWxEpPklsvRMEuFvfTLmLbiQVOyqIdl'; // Reemplaza con tu Client Secret
  private redirectUri = 'http://localhost:4200/menu'; // Asegúrate de que coincida con la URL de redireccionamiento
  private authUrl = 'https://discord.com/oauth2/authorize?client_id=1293484425920778331&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fmenu&scope=identify';
  private tokenUrl = 'https://discord.com/api/oauth2/token';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const url = `${this.authUrl}?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&response_type=code&scope=identify`;
    window.location.href = url; // Redirige al usuario a Discord para iniciar sesión
  }

  handleRedirect() {
    const code = this.getCodeFromUrl();
    if (code) {
      this.getToken(code);
    }
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Verifica si el token de Discord está presente
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
            localStorage.setItem('token', response.access_token); // Almacena el token
            this.router.navigate(['/menu']); // Redirige a la página de menú
        }, error => {
            console.error('Error al obtener el token:', error);
            alert('Error al iniciar sesión. Intenta nuevamente.');
        });
  }
}

interface TokenResponse {
  access_token: string;
  // Agrega otras propiedades que necesites de la respuesta
}