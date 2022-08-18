import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataVenta, Venta } from './interfaces/IDataVenta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  apiUrl: string = environment.apiUrl;
  ventaUrl:    string = `${this.apiUrl}/venta`;
  resultados : Venta[] = [];

  constructor(private http: HttpClient) { }
  
  listarVentas(){
    this.http.get<IDataVenta>(this.ventaUrl)
              .subscribe(resp => {
                this.resultados = resp.resultado;
              })
  }

  crearVenta(venta: Venta){
    return this.http.post(this.ventaUrl, venta);
  }

  getVenta(id: number){
    console.log(`la url para eliminar es :${this.apiUrl}/venta/${id}`);
    return this.http.get(`${this.apiUrl}/venta/${id}`)
  }

  actualizarVenta(id: number, venta: Venta){
    console.log(`la url es :${this.apiUrl}/venta/${id}`);
    return this.http.put(`${this.apiUrl}/venta/${id}`,venta)
  }
  
  deleteVenta(id: number){
    return this.http.delete(`${this.apiUrl}/venta/${id}`)
  }
}