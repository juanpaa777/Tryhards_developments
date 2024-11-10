/// <reference types="@types/google.maps" />

import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChild('divMap') divMap!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  distancia!: string;
  directionRender!: google.maps.DirectionsRenderer;
  directionService!: google.maps.DirectionsService;

  constructor(private renderer: Renderer2, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerUbicacionEnTiempoReal();
  }

  obtenerUbicacionEnTiempoReal() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.cargarMapa(userLocation); // Cargar mapa con la ubicación exacta
      }, (error) => {
        console.error("No se pudo obtener la ubicación:", error);
        this.cargarMapa({ lat: 21.152639, lng: -101.711598 }); // Coordenadas por defecto
      });
    } else {
      console.error("Geolocalización no soportada en este navegador.");
      this.cargarMapa({ lat: 21.152639, lng: -101.711598 }); // Coordenadas por defecto
    }
  }
  ubicarme() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.mapa.setCenter(userLocation); // Centrar el mapa en la ubicación actual
        this.mapa.setZoom(15); 
        this.mostrarEfectoRadar(userLocation); 
      }, (error) => {
        console.error("No se pudo obtener la ubicación:", error);
      });
    } else {
      console.error("Geolocalización no soportada en este navegador.");
    }
  }

  mostrarEfectoRadar(location: { lat: number, lng: number }) {
    const circle = new google.maps.Circle({
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map: this.mapa,
      center: location,
      radius: 50 // Radio inicial del círculo
    });

    // Animar el efecto de radar
    let radius = 50;
    const interval = setInterval(() => {
      radius += 5; // Aumentar el radio
      circle.setRadius(radius);
      if (radius > 200) { // Detener la animación después de cierto tamaño
        clearInterval(interval);
      }
    }, 100); // Cambiar el tamaño cada 100 ms
  }

  cargarMapa(location: { lat: number, lng: number }) {
    console.log('Cargando mapa en:', location);
    const opciones = {
      center: new google.maps.LatLng(location.lat, location.lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.divMap.nativeElement, opciones);

    this.directionService = new google.maps.DirectionsService();
    this.directionRender = new google.maps.DirectionsRenderer();
    this.directionRender.setMap(this.mapa);

    const userMarker = new google.maps.Marker({
      position: location,
      map: this.mapa,
      title: "Tu ubicación"
    });

    const userInfowindow = new google.maps.InfoWindow({
      content: "<strong>Estás aquí</strong>"
    });
    userInfowindow.open(this.mapa, userMarker);

    this.cargarNoticias();
  }

  cargarNoticias() {
    console.log('Cargando noticias...');
    this.http.get<any[]>('http://localhost:3000/noticias').subscribe(
      noticias => {
        console.log('Noticias recibidas:', noticias);
        noticias.forEach(noticia => {
          const lat = parseFloat(noticia.Latitud);
          const lng = parseFloat(noticia.Longitud);
          if (!isNaN(lat) && !isNaN(lng)) {
            console.log(`Agregando marcador para: ${noticia.Titulo} en (${lat}, ${lng})`);
            this.agregarMarcador({ lat, lng }, noticia.Titulo);
          } else {
            console.error('Coordenadas inválidas para la noticia:', noticia);
          }
        });
      },
      error => {
        console.error('Error al cargar noticias:', error);
      }
    );
  }

  agregarMarcador(location: { lat: number, lng: number }, title: string) {
    console.log(`Creando marcador en lat: ${location.lat}, lng: ${location.lng}, título: ${title}`);
    const marker = new google.maps.Marker({
      position: location,
      map: this.mapa,
      title: title
    });

    const infoWindow = new google.maps.InfoWindow({
      content: title,
      disableAutoPan: true
    });

    marker.addListener('mouseover', () => {
      infoWindow.open(this.mapa, marker);
    });

    marker.addListener('mouseout', () => {
      infoWindow.close();
    });

    marker.addListener('click', () => {
      this.calcularRutaDesdeUsuario(location);
    });

    this.markers.push(marker);
  }

  calcularRutaDesdeUsuario(destination: { lat: number, lng: number }) {
    // Cambiar el orden de las coordenadas para asegurarte de que se usan las correctas
    const userLocation = {
      lat: destination.lat, // Usar las coordenadas de la noticia
      lng: destination.lng
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.directionService.route({
          origin: userLocation,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: false
        }, (resultado, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionRender.setDirections(resultado);
          } else {
            console.error("No se pudo mostrar la ruta debido a: " + status);
          }
        });
      }, () => {
        console.error("No se pudo obtener la ubicación del usuario.");
      });
    } else {
      console.error("Geolocalización no soportada en este navegador.");
    }
  }

  regresarInicio() {
    this.router.navigate(['/menu']);
  }
}