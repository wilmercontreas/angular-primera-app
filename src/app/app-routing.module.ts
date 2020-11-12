import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'persona/:i', component: PersonaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
