import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from './book.service';

@Component({
  selector: 'app-google-books-search',
  templateUrl: './google-books-search.component.html',
  styleUrls: ['./google-books-search.component.css']
})
export class GoogleBooksSearchComponent {
  searchQuery: string = '';
  books: any[] = [];
  loading: boolean = false;

  constructor(private bookService: BookService, private snackBar: MatSnackBar) {}

  searchBooks() {
    if (!this.searchQuery.trim()) {
      this.snackBar.open('Por favor, ingresa un término de búsqueda', 'Cerrar', { duration: 3000 });
      return;
    }

    this.loading = true;
    this.bookService.searchGoogleBooks(this.searchQuery).subscribe(
      (data: any) => {
        if (data.items && data.items.length > 0) {
          this.books = data.items.map((item: any) => ({
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ['Desconocido'],
            description: item.volumeInfo.description || 'No disponible',
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'ruta/por/defecto.jpg',
            infoLink: item.volumeInfo.infoLink
          }));
        } else {
          this.books = [];
          this.snackBar.open('No se encontraron libros', 'Cerrar', { duration: 3000 });
        }
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al buscar libros:', error); // Asegúrate de que esto se ejecute
        this.snackBar.open('Error al buscar libros', 'Cerrar', { duration: 3000 });
        this.loading = false;
      }
    );
  }
}
