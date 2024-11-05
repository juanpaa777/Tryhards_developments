import { Component, OnInit } from '@angular/core';
import { LibriboxService } from '../../../services/libribox.service';

@Component({
  selector: 'app-libribox',
  templateUrl: './libribox.component.html',
  styleUrls: ['./libribox.component.css']
})
export class LibriboxComponent implements OnInit {
  books: any[] = [];

  constructor(private libriboxService: LibriboxService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.libriboxService.getBooks().subscribe(data => {
      this.books = data?.books || [];
    }, error => {
      console.error('Error al cargar los libros:', error);
    });
  }
}