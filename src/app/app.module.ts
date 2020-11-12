import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    AboutComponent,
    PersonasComponent,
    InformacionComponent,
    PersonaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
