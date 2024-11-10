import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBooksComponent } from './components/menu/Options/search-books/SearchBooks.component';
import { NewBooksComponent } from './components/menu/Options/NewBooks/NewBooks.component';
import { EditBooksComponent } from './components/menu/Options/EditBooks/EditBooks.component';
import { ConfirmacionDeEmailComponent } from './components/menu/Options/confirmacion-de-email/confirmacion-de-email.component';
import { MultasComponent } from './components/menu/Options/multas/multas.component';
import { RegistroBibiotecariosModule } from './components/menu/Options/RegistroBibliotecarios/bibliotecarios.component';
import { RegistroLectorComponent } from './components/menu/Options/Lectores/lectores.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonalisadoComponent } from './components/menu/Options/ReportePersonalisado/personalisados.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/home/error/error.component';
import { DevolucionDeLibrosComponent } from './components/menu/Options/devolucion-de-libros/devolucion-de-libros.component';
import { MapaComponent } from './components/menu/APIS/mapa/mapa.component';
import { NoticiasComponent } from './components/menu/Options/noticias/noticias.component';
import { LoginComponent } from './components/home/login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GoogleBooksSearchComponent } from './components/menu/APIS/google-books-search/google-books-search.component';
import { PagoMultasComponent } from './menu/Options/pago-multas/pago-multas.component';
import { PaypalButtonComponent } from './components/menu/APIS/paypal-button/paypal-button.component';
import { ArchiveComponent } from './components/menu/APIS/archive/archive.component';
import { TwilioComponent } from './components/menu/APIS/twilio/twilio.component';
import { ConferenciaComponent } from './components/menu/APIS/conferencia/conferencia.component';
import { GoogleSearchComponent } from './components/menu/APIS/google-search/google-search.component';
import { TicketModalComponent } from './components/ticket-modal/ticket-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SearchBooksComponent,
    NewBooksComponent,
    EditBooksComponent,
    ConfirmacionDeEmailComponent,
    MultasComponent,
    RegistroLectorComponent,
    PersonalisadoComponent,
    ErrorComponent,
    DevolucionDeLibrosComponent,
    AppComponent,
    MapaComponent,
    NoticiasComponent,
    GoogleBooksSearchComponent,
    PagoMultasComponent,
    PaypalButtonComponent,
    ArchiveComponent,
    TwilioComponent,
    ConferenciaComponent,
    GoogleSearchComponent,
    TicketModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RegistroBibiotecariosModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    OAuthModule.forRoot() // Agregar el módulo de OAuth
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
