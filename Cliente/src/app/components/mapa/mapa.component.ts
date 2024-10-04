///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

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
  directionRender!: google.maps.DirectionsRenderer; // Instancia de DirectionsRenderer
  directionService!: google.maps.DirectionsService; // Instancia de DirectionsService

  // Array de destinos fijos
  destinos: { lat: number, lng: number, title: string }[] = [
    { lat: 21.171584, lng: -100.944577, title: "Exposicion de Lectura" },
    { lat: 21.159769,lng:  -100.902120, title: "Lectura"},
    { lat: 21.191298, lng: -100.923751, title: "Recoleccion de libros" }
  ];

  constructor(private renderer: Renderer2, private router: Router) {} // Inyectar Router

  ngOnInit(): void {
    this.obtenerUbicacionEnTiempoReal(); // Llama a la función al iniciar
  }

  obtenerUbicacionEnTiempoReal() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.cargarMapa(userLocation); // Cargar el mapa en la ubicación del usuario
      }, () => {
        alert("No se pudo obtener la ubicación.");
      });
    } else {
      alert("Geolocalización no soportada en este navegador.");
    }
  }

  cargarMapa(location: { lat: number, lng: number }) {
    const opciones = {
      center: new google.maps.LatLng(location.lat, location.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones);

    // Inicializar DirectionsService y DirectionsRenderer
    this.directionService = new google.maps.DirectionsService();
    this.directionRender = new google.maps.DirectionsRenderer();
    this.directionRender.setMap(this.mapa); // Asignar el mapa al DirectionsRenderer

    // Marcador para la ubicación del usuario
    const userMarker = new google.maps.Marker({
      position: location,
      map: this.mapa,
      title: "Tu ubicación"
    });

    // Infowindow para el marcador del usuario
    const userInfowindow = new google.maps.InfoWindow({
      content: "<strong>Estás aquí</strong>"
    });
    userInfowindow.open(this.mapa, userMarker);

    // Agregar marcadores fijos
    this.destinos.forEach(destino => {
      this.agregarMarcador({ lat: destino.lat, lng: destino.lng }, destino.title);
    });
  }

  agregarMarcador(location: { lat: number, lng: number }, title: string) {
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
  }

  calcularRutaDesdeUsuario(destination: { lat: number, lng: number }) {
    // Limpiar la ruta anterior
    this.directionRender.setMap(this.mapa); // Asegurarse de que el DirectionsRenderer esté asignado al mapa

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.directionService.route({
          origin: userLocation,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING, // Modo de viaje para calcular la ruta más rápida
          provideRouteAlternatives: false // 
        }, (resultado, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionRender.setDirections(resultado); // 
            this.distancia = resultado.routes[0].legs[0].distance.text; // Obtener la distancia
          } else {
            alert("No se pudo mostrar la ruta debido a: " + status);
          }
        });
      }, () => {
        alert("No se pudo obtener la ubicación del usuario.");
      });
    } else {
      alert("Geolocalización no soportada en este navegador.");
    }
  }

  regresarInicio() {
    this.router.navigate(['/menu']);
  }
}