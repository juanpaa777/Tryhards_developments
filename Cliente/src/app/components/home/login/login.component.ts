import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../menu/Options/auth.service';
import { AuthGoogleService } from './auth-google.service'; // Importar el servicio de Google
import { AuthDiscordService } from './AuthDiscordService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordVisible: boolean = false;
  showForgot: boolean = false;
  authData = { username: '', password: '', confirmPassword: '' };
  isRegisterMode = false;

  constructor(public modal: NgbActiveModal, private router: Router, private modalService: NgbModal, 
    private authService: AuthService, private authGoogleService: AuthGoogleService, private authDiscordService: AuthDiscordService) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement | null;
    if (passwordField) {
      passwordField.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.authData = { username: '', password: '', confirmPassword: '' };
  }

  onRegister() {
    if (this.authData.password !== this.authData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.authData.username, this.authData.password).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        alert(response.message);
        this.toggleMode();
      },
      error: (error) => {
        console.error('Error:', error);
        if (error.status === 409) {
          alert('El nombre de usuario ya está en uso.');
        } else {
          alert('Error del servidor. Intente nuevamente.');
        }
      }
    });
  }

  onLogin() {
    this.authService.login(this.authData.username, this.authData.password).subscribe({
        next: (response) => {
            console.log('Respuesta del servidor', response);
            alert(response.message);
            localStorage.setItem('token', response.token); // Almacena el token en localStorage
            this.modal.dismiss();
            this.router.navigate(['/menu']);
        },
        error: (error) => {
            console.error('Error:', error);
            alert('Credenciales inválidas.');
        }
    });
}

  openForgotPassword() {
    this.showForgot = true;
  }

  backToLogin() {
    this.showForgot = false;
  }

  loginWithGoogle() {
    this.authGoogleService.login().then((googleUser: any) => {
      if (googleUser) {
        const email = googleUser.email;
        const name = googleUser.name;
        
        // Llama al servicio de autenticación para registrar o iniciar sesión con Google
        this.authService.loginOrRegisterWithGoogle(email, name).subscribe({
          next: (response) => {
            console.log('Respuesta del servidor', response);
            alert(response.message);
            localStorage.setItem('token', response.token);
            this.modal.dismiss();
            this.router.navigate(['/menu']); // Asegúrate de que esto coincida con tu ruta
          },
          error: (error: any) => {
            console.error('Error:', error);
            alert('Error al iniciar sesión con Google.');
          }
        });
      }
    }).catch((error: any) => {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error al iniciar sesión con Google.');
    });
  }

  loginWithDiscord() {
    this.authDiscordService.login();
  }
}
