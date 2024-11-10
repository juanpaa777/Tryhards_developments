// book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiKey = 'AIzaSyDlBbwmK8yweJ9utOtm0-uGQ9NgOj47R3I'; 
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchGoogleBooks(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?q=${query}&key=${this.apiKey}`);
  }
}
