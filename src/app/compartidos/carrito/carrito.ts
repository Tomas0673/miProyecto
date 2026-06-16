import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../models/productoPlantilla';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class CarritoComponent {
  productosCarrito: Producto[] = [];
  constructor(
    private carritoService: CarritoService
  ) { }
  ngOnInit() {
    this.productosCarrito =
      this.carritoService.obtenerProducto();
  }
  aumentar(id: number|string) {
    this.carritoService.aumentarCantidad(id);
  }
  disminuir(id: number|string) {
    this.carritoService.disminuirCantidad(id);
  }
  eliminar(id: number|string) {
    this.carritoService.eliminarProducto(id);
    this.productosCarrito =
      this.carritoService.obtenerProducto();
  }

}
