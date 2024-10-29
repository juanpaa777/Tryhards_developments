import { Component } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.css'
})
export class SpotifyComponent {
  clientId = "bfcf8ee07b93422a8b0660c5274202e0";  // Asegúrate de tener el ID en un archivo de configuración
  clientSecret = "d83586c5693d46b2b5814e24894d28e3";  // Asegúrate de tener la clave en un archivo de configuración
  redirectUri = 'http://localhost:4200/menu';  // Cambia según tu URI de redirección
  scopes = 'user-read-private user-read-email';  // Agrega los permisos necesarios

  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) {}


  loginWithSpotify() {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes)}`;
    window.location.href = authUrl;
  }
  handleRedirect() {
    const code = this.getCodeFromUrl();
  if (code) {
    this.getAccessToken(code).subscribe(
      (response) => {
        localStorage.setItem('spotifyAccessToken', response.access_token);
        // Aquí puedes hacer algo más, como redirigir al usuario a otra página
      },
      (error) => {
        console.error('Error al obtener el token de acceso:', error);
      }
    );
  }
  }

  private getCodeFromUrl(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get('code');
  }

  getAccessToken(code: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', this.redirectUri);
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });
  
    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }


  searchAudiobooks01() {
    if (this.searchQuery.trim() !== '') {
      this.searchAudiobooks(this.searchQuery).subscribe(
        (response) => {
          this.searchResults = response;
        },
        (error) => {
          console.error('Error searching audiobooks:', error);
        }
      );
    } else {
      console.log('El campo de búsqueda está vacío');
    }
  }

  searchAudiobooks(query: string): Observable<any> {
    const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('spotifyAccessToken')}`
    });
  
    return this.http.get(apiUrl, { headers })
      .pipe(
        map((response: any) => {
          // Filtrar los resultados para obtener solo los audiolibros
          return response.albums.items.filter((item: any) => item.album_type === 'audiobook');
        })
      );
  }


}
