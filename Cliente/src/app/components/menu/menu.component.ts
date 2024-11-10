import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../menu/Options/Services/sidebar.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthDiscordService } from '../home/login/AuthDiscordService.service';
import { DailyApiService } from '../menu/Options/daily-api.service';

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
  showRegistroBibliotecarios = false;
  isDropdownVisible = false;
  showLectores = false;
  showReporte = false;
  isFooterVisible = false;
  showNoticias = false;
  showDevolucionDeLibros = false;
  showGestionNoticias = false;
  showGoogleBooks = false;
  isArchiveVisible = false;
  noticiasItems: any[] = [];
  private intervalId: any;
  userProfile: any;
  showUserDetails = false;
  userGuilds: any[] = [];
  showPayPal = false;
  showTwilio = false;
  showConferencia = false;
  showGoogleSearchComponent = false; // Nueva propiedad para controlar la visibilidad del buscador

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private authDiscordService: AuthDiscordService, private dailyApiService: DailyApiService) {
    this.sidebarService.sidebarHidden$.subscribe(hidden => this.isSidebarHidden = hidden);
    this.dailyApiService.conferenceVisible$.subscribe(visible => this.showConferencia = visible);
  }

  ngOnInit() {
    this.cargarNoticias();
    this.iniciarDesplazamiento();
    this.showCarruselNoticias();
    this.authDiscordService.userProfile$.subscribe(profile => {
      this.userProfile = profile;
      if (profile) {
        console.log('Perfil recibido en el componente:', profile);
        this.fetchUserGuilds();
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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
    this.showGestionNoticias = true;
    this.cargarNoticias();
  }

  showCarruselNoticias() {
    this.resetViews();
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

  showArchive() {
    this.resetViews();
    this.isArchiveVisible = true;
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

  showTwilioComponent() {
    this.resetViews();
    this.showTwilio = true;
  }

  private resetViews() {
    this.showNoticias = false;
    this.showSearch = false;
    this.showNewBooks = false;
    this.showMultas = false;
    this.showRegistroBibliotecarios = false;
    this.showLectores = false;
    this.showReporte = false;
    this.showDevolucionDeLibros = false;
    this.showGestionNoticias = false;
    this.showGoogleBooks = false;
    this.showPayPal = false;
    this.isArchiveVisible = false;
    this.showTwilio = false;
    this.showConferencia = false;
    this.showGoogleSearchComponent = false; // Asegúrate de ocultar el buscador
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
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
        }
      }
    }, 3000);
  }

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

  iniciarConferencia() {
    this.resetViews();
    this.dailyApiService.setConferenceVisible(true);
  }

  // Método para mostrar el buscador de Google
  showGoogleSearch() {
    this.resetViews(); // Resetea otras vistas
    this.showGoogleSearchComponent = true; // Muestra el componente de búsqueda
  }
}