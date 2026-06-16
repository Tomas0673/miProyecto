import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Contacto } from './paginas/contacto/contacto';
import { Orfertas } from './paginas/orfertas/orfertas';
import { Productos } from './paginas/productos/productos';
import { Registro } from './auth/registro/registro';
import { CarritoComponent } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Footer } from './compartidos/footer/footer';
import { Nav } from './compartidos/nav/nav';

export const routes: Routes = [
    {path: '', redirectTo:'inicio', pathMatch:'full'},
    {path: 'inicio',component:Inicio},
    {path: 'inicioSesion', component:InicioSesion},
    {path: 'contacto',component:Contacto},
    {path: 'ofertas',component:Orfertas},
    {path: 'productos',component:Productos},
    {path: 'registro',component:Registro},
    {path: 'carrito',component:CarritoComponent},
    {path: 'favoritos',component:Favoritos},
    {path: 'footer',component:Footer},
    {path: 'nav',component:Nav},
    {path: '**',redirectTo:'inicio'}
];
