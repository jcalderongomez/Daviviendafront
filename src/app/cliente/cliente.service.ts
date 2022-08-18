import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente, IDataCliente } from './interfaces/IDataCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  apiUrl: string = environment.apiUrl;
  clienteUrl: string = `${this.apiUrl}/Cliente`;
  resultados : Cliente[] = [];

  constructor(private http: HttpClient) { }

  listarClientes(){
    this.http.get<IDataCliente>(this.clienteUrl)
              .subscribe(resp => {
                this.resultados = resp.resultado;
              })
  }

  crearCliente(cliente: Cliente){
    return this.http.post(this.clienteUrl, cliente);
  }

  getCliente(id: number){
    console.log(`la url para eliminar es :${this.apiUrl}/cliente/${id}`);
    return this.http.get(`${this.apiUrl}/cliente/${id}`)
  }

  actualizarCliente(id: number, cliente: Cliente){
    console.log(`la url es :${this.apiUrl}/cliente/${id}`);
    return this.http.put(`${this.apiUrl}/cliente/${id}`,cliente)
  }
  
  deleteCliente(id: number){
    return this.http.delete(`${this.apiUrl}/cliente/${id}`)
  }
}