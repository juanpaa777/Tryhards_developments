import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyApiService {

  private apiUrl = 'https://tryhardsdevelopments.daily.co/TF2yF7dUsVicHqBgzrYj'; // Endpoint de la API de Daily
  private apiKey = 'a345f906dc7d79e2f7e3e8f160c20979b978b835c5fb7f76b8789520f0db140a'; // Reemplaza con tu API Key

  constructor(private http: HttpClient) { }

  // Método para obtener las salas
  getRooms(limit: number = 100, startingAfter?: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    let url = `${this.apiUrl}?limit=${limit}`;
    if (startingAfter) {
      url += `&starting_after=${startingAfter}`;
    }

    return this.http.get<any>(url, { headers });
  }
} 