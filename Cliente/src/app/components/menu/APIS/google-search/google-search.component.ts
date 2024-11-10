import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent {
  query: string = '';
  results: any[] = [];
  apiKey: string = 'AIzaSyDsj5zaSdDi1k72NIbOVwcVMJ0Nbduz9N8'; // Reemplaza con tu clave de API
  cx: string = '4526fb4e2204b441b'; // Reemplaza con tu ID de motor de búsqueda

  constructor(private http: HttpClient) {}

  search() {
    const url = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cx}&q=${this.query}`;
    this.http.get(url).subscribe((response: any) => {
      this.results = response.items || [];
    }, error => {
      console.error('Error al realizar la búsqueda:', error);
    });
  }
}