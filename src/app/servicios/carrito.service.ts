import { Injectable } from '@angular/core';
import { Producto } from '../models/productoPlantilla';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {

  carrito: Producto[] = [];


  agregarPoducto(p: Producto) {
    this.carrito.push(p);
  }

  obtenerProducto() {
    return this.carrito;
  }

  aumentarCantidad(id: number) {
    const producto =
      this.carrito
        .find(p => p.id === id);
    if (producto) {
      producto.cantidad++;
    }
  }

  disminuirCantidad(id: number) {
    const producto =
      this.carrito
        .find(l => l.id === id);
    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminarProducto(id: number) {
    this.carrito =
      this.carrito
        .filter(p => p.id !== id);
  }

  vaciarCarrito(){
    this.carrito = this.carrito.filter(p => p.id = 0);
  }

}


