import { Component } from '@angular/core';
import { Producto } from '../../models/productoPlantilla';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  // Inyección del servicio
  constructor(
    private carritoService: CarritoService
  ) { }

  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "assets/Mate-criollo-camionero.png",
      disponibilidad: true,
      categoria: ""
    },
    {
      id: 2,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "assets/Mate-criollo-camionero.png",
      disponibilidad: true,
      categoria: ""
    },
    {
      id: 3,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: ""
    },
    {
      id: 4,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: ""
    },
    {
      id: 5,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: ""
    },
    {
      id: 6,
      nombre: "Mate Criollo con Base de Cuero",
      descripcion: "Mate de Calabaza Camionero Criollo, contiene una base de cuero fino",
      precio: 18000,
      cantidad: 0,
      imagen: "",
      disponibilidad: true,
      categoria: ""
    },
  ];

  // Llama al servicio para agregar el producto al carrito
  agregarCarrito(p: Producto) {
    this.carritoService.agregarPoducto(p);
  }

}
