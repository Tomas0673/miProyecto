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

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productosCarrito =
      this.carritoService.obtenerProducto();
  }

  cantidad(producto:Producto, accion:boolean){
    this.carritoService.cantidad(producto,accion);
  }
  
  eliminar(id: number|string) {
    this.carritoService.eliminarProducto(id);
    this.productosCarrito =
      this.carritoService.obtenerProducto();
  }

  subTotal(id: number|string){
    this.carritoService.subTotal(id);
  }

  totalPago(){
    return this.carritoService.totalPago();
  }
  
  vaciarCarrito(){
    this.carritoService.vaciarCarrito();
    this.productosCarrito =
      this.carritoService.obtenerProducto();
  }

  finalizarCompra(){
    return this.carritoService.finalizarCompra();
  }

}
