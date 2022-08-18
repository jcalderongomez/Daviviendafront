import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataProveedor, Proveedor } from './interfaces/IDataProveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  apiUrl: string = environment.apiUrl;
  proveedorUrl: string = `${this.apiUrl}/proveedor`;
  resultados : Proveedor[] = [];

  constructor(private http: HttpClient) { }

  
  listarProveedores(){
    this.http.get<IDataProveedor>(this.proveedorUrl)
              .subscribe(resp => {
                this.resultados = resp.resultado;
              })
  }

  crearProveedor(proveedor: Proveedor){
    return this.http.post(this.proveedorUrl, proveedor);
  }

  getProveedor(id: number){
    console.log(`la url para eliminar es :${this.apiUrl}/proveedor/${id}`);
    return this.http.get(`${this.apiUrl}/proveedor/${id}`)
  }

  actualizarProveedor(id: number, proveedor: Proveedor){
    console.log(`la url es :${this.apiUrl}/proveedor/${id}`);
    return this.http.put(`${this.apiUrl}/proveedor/${id}`,proveedor)
  }

  deleteProveedor(id: number){
    return this.http.delete(`${this.apiUrl}/proveedor/${id}`)
  }
}