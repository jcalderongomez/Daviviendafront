import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataProducto, Producto } from './interfaces/IDataProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  apiUrl: string = environment.apiUrl;
  productoUrl: string = `${this.apiUrl}/producto`;
  resultados : Producto[] = [];

  constructor(private http: HttpClient) { }

  listarProductos(){
    this.http.get<IDataProducto>(this.productoUrl)
              .subscribe(resp => {
                this.resultados = resp.resultado;
              })
  }

  crearProducto(producto: Producto){
    return this.http.post(this.productoUrl, producto);
  }

  getProducto(id: number){
    return this.http.get(`${this.apiUrl}/producto/${id}`)
  }


  actualizarProducto(id: number, producto: Producto){
    return this.http.put(`${this.apiUrl}/producto/${id}`,producto)
  }

  deleteProducto(id: number){
    return this.http.delete(`${this.apiUrl}/producto/${id}`)
    
  }
}
