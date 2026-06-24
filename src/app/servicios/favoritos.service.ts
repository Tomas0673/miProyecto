import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/productoPlantilla';

// Una sola instancia compartida en toda la app
@Injectable({ providedIn: 'root' })
export class FavoritosService {
    favoritos: Producto[] = []

    agregarFavoritos(producto: Producto) {
        const productoExistente = this.favoritos.find(p => p.id === producto.id);
        if (productoExistente) {
            this.quitarFavorito(producto);
        } else {
            this.favoritos.push(producto);
        }
    }

    obtenerFavoritos(){
        return this.favoritos;
    }

    limpiarFavoritos() {
        this.favoritos = this.favoritos.filter(p => p.id = 0);
    }

    quitarFavorito(producto: Producto) {
        this.favoritos = this.favoritos.filter(p => p.id !== producto.id);
    }
}