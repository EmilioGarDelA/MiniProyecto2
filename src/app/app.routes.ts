import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ReservaComponent } from './reserva/reserva.component';
import { FormsModule } from '@angular/forms';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'reserva', component: ReservaComponent},
    {path: 'citas', component: VerCitasComponent},
    {path: 'search', component: SearchComponent},
];
