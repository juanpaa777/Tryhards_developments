import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../menu/Options/Services/sidebar.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthDiscordService } from '../home/login/AuthDiscordService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  // Estado de las vistas
  isSidebarHidden = false;
  showSearch = false;
  showNewBooks = false;
  showMultas = false;
  showRegistroBibliotecarios = false; // Cambia showRegistro por un nombre específico
  isDropdownVisible = false;
  showLectores = false;
  showReporte = false;
  isFooterVisible = false;
  showNoticias = false;
  showDevolucionDeLibros = false;
  showGestionNoticias = false; // Nueva variable específica para gestionar noticias
  showGoogleBooks = false;
  noticiasItems: any[] = [];
  private intervalId: any;
  userProfile: any; // Añade esta línea para definir userProfile
  showUserDetails = false;
  userGuilds: any[] = [];
  showPayPal = false; // Variable para controlar la vista de PayPal

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private authDiscordService: AuthDiscordService) {
    this.sidebarService.sidebarHidden$.subscribe(hidden => this.isSidebarHidden = hidden);
  }

  ngOnInit() {
    this.cargarNoticias();
    this.iniciarDesplazamiento();
    this.showCarruselNoticias(); // Muestra el carrusel de noticias al iniciar
    this.authDiscordService.userProfile$.subscribe(profile => {
      this.userProfile = profile;
      if (profile) {
        console.log('Perfil recibido en el componente:', profile); // Añade un log para verificar los datos
        this.fetchUserGuilds(); // Obtener los servidores del usuario si el perfil está disponible
      }
    });
    // Otros inicializadores
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpia el intervalo
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  showSearchBooks() {
    this.resetViews();
    this.showSearch = true;
  }

  showNewBook() {
    this.resetViews();
    this.showNewBooks = true;
  }

  showMulta() {
    this.resetViews();
    this.showMultas = true;
  }

  showRegistroBlibliotecarios() {
    this.resetViews();
    this.showRegistroBibliotecarios = true;
  }

  showRegistroLectores() {
    this.resetViews();
    this.showLectores = true;
  }

  showPersonalisado() {
    this.resetViews();
    this.showReporte = true;
  }

  showGestionarNoticias() {
    this.resetViews();
    this.showGestionNoticias = true; // Controla el componente de gestión de noticias
    this.cargarNoticias();
  }
showCarruselNoticias() {
  this.resetViews(); // Resetea otras vistas
  this.showNoticias = true;
}

  mostrarDevolucionDeLibros() {
    this.resetViews();
    this.showDevolucionDeLibros = true; // Cambia a true para mostrar el componente
  }

  verEventosCercanos() { // Nuevo método para redirigir al mapa
    this.resetViews(); // Asegúrate de que se llame a resetViews aquí
    this.router.navigate(['/mapa']); // Asegúrate de que la ruta '/mapa' esté configurada en tu enrutador
  }
  showGoogleBooksSearch() {
    this.resetViews();
    this.showGoogleBooks = true; // Mostrar el componente de Google Books
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }

  logout() {
    localStorage.removeItem('token'); // Elimina el token de localStorage
    this.router.navigate(['/home']); // Redirige a la página de inicio de sesión
  }

  displayPayPal() { // Renombrado para evitar conflicto
    this.resetViews();
    this.showPayPal = true; // Mostrar el componente de PayPal
  }

  // Método para resetear las vistas
  private resetViews() {
    this.showNoticias = false;
    this.showSearch = false;
    this.showNewBooks = false;
    this.showMultas = false;
    this.showRegistroBibliotecarios = false; // Cambiado para bibliotecarios
    this.showLectores = false;
    this.showReporte = false;
    this.showDevolucionDeLibros = false;
    this.showGestionNoticias = false; // Asegúrate de resetear esta vista también
    this.showGoogleBooks = false; 
    this.showPayPal = false; // Asegúrate de resetear esta vista también
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight || document.documentElement.offsetHeight;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    this.isFooterVisible = windowBottom >= docHeight;
  }

  private cargarNoticias() {
    this.http.get<any[]>('http://localhost:3000/noticias').subscribe(data => {
      this.noticiasItems = data;
    }, error => {
      console.error('Error al cargar noticias:', error);
    });
  }

  private iniciarDesplazamiento() {
    this.intervalId = setInterval(() => {
      const carousel = document.querySelector('.noticias-carousel') as HTMLElement;
      if (carousel) {
        carousel.scrollBy({ left: 400, behavior: 'smooth' });
        // Reiniciar la posición si llega al final
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0; // Regresar a la posición inicial
        }
      }
    }, 3000);
  }

  // Método para abrir el modal
  openUserDetails() {
    this.showUserDetails = true;
  }

  // Método para cerrar el modal
  closeUserDetails() {
    this.showUserDetails = false;
  }

  // Método para obtener los servidores del usuario
  fetchUserGuilds() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.http.get('https://discord.com/api/users/@me/guilds', { headers }).subscribe(
        (guilds: any) => {
          this.userGuilds = guilds;
        },
        error => {
          console.error('Error al obtener los servidores del usuario:', error);
        }
      );
    }
  }
}
