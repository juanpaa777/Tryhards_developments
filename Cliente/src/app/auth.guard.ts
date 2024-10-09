import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './components/menu/Options/auth.service';
import { AuthDiscordService } from './components/home/login/AuthDiscordService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private authDiscordService: AuthDiscordService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isLoggedIn() || this.authDiscordService.isLoggedIn(); // Verifica ambos inicios de sesión
    
    // Permitir acceso a la página de inicio de sesión
    if (this.router.url === '/login') {
      return true;
    }

    if (!isAuthenticated) {
      alert('¡ALERTA! Se ha detectado un intento de acceso no autorizado. ¡No puedes entrar aquí sin autorización!'); 
      this.router.navigate(['/home']); // Redirige a la página de inicio
      return false; // No permitir acceso
    }
    
    return true; // Permitir acceso si está autenticado
  }
}
