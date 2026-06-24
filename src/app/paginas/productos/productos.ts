import { Component } from '@angular/core';
import { Producto } from '../../models/productoPlantilla';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  categoriaActiva: string = 'Todos';

  // Inyección del servicio
  constructor(
    private carritoService: CarritoService,
    private favoritoService: FavoritosService
  ) { }

  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "assets/Mate-criollo-camionero.png",
      disponibilidad: true,
      categoria: "Pelotas"
    },
    {
      id: 2,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "assets/Mate-criollo-camionero.png",
      disponibilidad: true,
      categoria: "Calzado"
    },
    {
      id: 3,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: "Proteccion"
    },
    {
      id: 4,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: "Ropa"
    },
    {
      id: 5,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: "Calzado"
    },
    {
      id: 6,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      subtotal: 0,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: "Proteccion"
    },
  ];

  agregarCarrito(p: Producto) {
    this.carritoService.agregarPoducto(p);
  }

  agregarFavoritos(p: Producto){
    this.favoritoService.agregarFavoritos(p);
  }
}
