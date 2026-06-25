import { Injectable } from '@angular/core';
import { Producto } from '../models/productoPlantilla';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {

  carrito: Producto[] = [];


  agregarPoducto(producto: Producto) {
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad ++;
    } else {
      producto.cantidad = 1;
      this.carrito.push(producto);
    }
    this.subTotal(producto.id);
  }

  obtenerProducto() {
    return this.carrito;
  }

  cantidad(producto:Producto, accion:boolean){
    const index = this.carrito.findIndex(p => p.id === producto.id);
      if (accion) {
        this.carrito[index].cantidad++;
      } else {
        this.carrito[index].cantidad--;
        if (this.carrito[index].cantidad <= 0) {
          this.carrito.splice(index, 1);
        }
      }
      this.subTotal(producto.id);
  }

  eliminarProducto(id: number|string) {
    this.carrito =
      this.carrito
        .filter(p => p.id !== id);
  }

  vaciarCarrito(){
    this.carrito = this.carrito.filter(p => p.id = 0);
  }

  subTotal(id: number|string){
    const producto = this.carrito.find(p => p.id === id);
    if (producto) {
      producto.subtotal = producto.precio * producto.cantidad;
      this.totalPago();
    }
  }

  totalPago(){
    return this.carrito.reduce((total, producto) => total + producto.subtotal, 0);
  }

  finalizarCompra(){
    return alert('Compra finalizada con éxito, su monto fue de ')
  }

}


