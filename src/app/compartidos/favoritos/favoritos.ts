import { Component } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Producto } from '../../models/productoPlantilla';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  favoritos: Producto[] = []

  constructor(private favoritosService: FavoritosService, private carritoService: CarritoService){}

  ngOnInit(){
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  limpiarFavoritos(){
      this.favoritosService.limpiarFavoritos();
      this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  agregarCarrito(p: Producto){
    this.carritoService.agregarPoducto(p);
  }

  quitarFavorito(p: Producto){
    this.favoritosService.quitarFavorito(p);
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }
}
