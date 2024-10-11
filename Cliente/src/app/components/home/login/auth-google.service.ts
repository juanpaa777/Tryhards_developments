import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '158523788954-s2bifoh0e1ilqhftkupkfitq9g9pbkau.apps.googleusercontent.com',
      redirectUri: 'http://localhost:4200/menu', // Cambiado a la URI autorizada
      scope: 'openid profile email',
    };

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.oauthService.initLoginFlow();
      this.oauthService.events.subscribe(event => {
        if (event.type === 'token_received') {
          const claims = this.oauthService.getIdentityClaims();
          resolve(claims);
        }
      }, error => {
        reject(error);
      });
    });
  }

  logout() {
    this.oauthService.logOut();
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
}