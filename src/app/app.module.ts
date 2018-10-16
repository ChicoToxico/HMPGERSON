import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import {AppRoutingModule} from './rutas';

//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/home/body/body.component';
import { RegistrosComponent } from './components/forms/registros/registros.component';
import { ContactoComponent } from './components/forms/contacto/contacto.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BodyComponent,
    RegistrosComponent,
    ContactoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
