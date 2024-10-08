import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];
  titulo: string = '';
  contenido: string = '';
  imagen: string = '';
  mostrarFormulario: boolean = false;
  coordenadas: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.http.get<any[]>('http://localhost:3000/noticias').subscribe(
      data => {
        console.log('Noticias cargadas:', data);
        this.noticias = data;
      },
      error => {
        console.error('Error al cargar noticias:', error);
        this.snackBar.open('Error al cargar noticias', 'Cerrar', { duration: 3000 });
      }
    );
  }

  agregarNoticia() {
    const [latitud, longitud] = this.coordenadas.split(',').map(coord => parseFloat(coord.trim()));

    if (isNaN(latitud) || isNaN(longitud) || latitud < -90 || latitud > 90 || longitud < -180 || longitud > 180) {
      console.error('Coordenadas inválidas:', this.coordenadas);
      this.snackBar.open('Coordenadas inválidas', 'Cerrar', { duration: 3000 });
      return;
    }

    const nuevaNoticia = { 
      titulo: this.titulo, 
      contenido: this.contenido, 
      imagen: this.imagen,
      latitud: latitud,
      longitud: longitud
    };

    console.log('Datos a enviar:', nuevaNoticia);

    this.http.post('http://localhost:3000/noticias', nuevaNoticia).subscribe(
      () => {
        this.snackBar.open('Noticia agregada exitosamente', 'Cerrar', { duration: 3000 });
        this.cargarNoticias();
        this.limpiarCampos();
        this.mostrarFormulario = false;
      },
      error => {
        console.error('Error al agregar noticia:', error);
        this.snackBar.open('Error al agregar noticia', 'Cerrar', { duration: 3000 });
      }
    );
  }

  eliminarNoticia(id: number) {
    this.http.delete(`http://localhost:3000/noticias/${id}`).subscribe(
      () => {
        this.snackBar.open('Noticia eliminada exitosamente', 'Cerrar', { duration: 3000 });
        this.cargarNoticias();
      },
      error => {
        console.error('Error al eliminar noticia:', error);
        this.snackBar.open('Error al eliminar noticia', 'Cerrar', { duration: 3000 });
      }
    );
  }

  limpiarCampos() {
    this.titulo = '';
    this.contenido = '';
    this.imagen = '';
    this.coordenadas = '';
  }
}
