import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibriboxService {
  private apiUrl = 'https://librivox.org/api/feed/audiobooks'; // Cambiado a la nueva URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener libros
  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Ajusta la ruta según la API
  }

  // Otros métodos para interactuar con la API pueden ser añadidos aquí
  
}
