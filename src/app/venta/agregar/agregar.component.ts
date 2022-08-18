import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { VentaService } from 'src/app/venta/venta.service';

import { ProductoService } from 'src/app/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  VentaForm: FormGroup
  
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private ventaService: VentaService,    
    private productoService: ProductoService,
    private router: Router) { 
      this.VentaForm = this.fb.group({
        fechaVenta    : [''],
        cliente       : [''],
        producto      : [''],
        descuento     : [''],
        total         : ['']
      })    
    }

    ngOnInit(): void {
      this.clienteService.listarClientes();
      this.productoService.listarProductos();
    }
  
    get resultadosClientes(){
      return this.clienteService.resultados;
    }
  
    get resultadosProductos(){
      return this.productoService.resultados;
    }
  
  onSubmit(){
    console.log(this.VentaForm.value);
    this.ventaService.crearVenta(this.VentaForm.value).subscribe((data:any)=>{
       Swal.fire(
         'Registro Venta',
         'Venta registrada con éxito',
         'success'
       )
       this.router.navigate(['/venta'])
     })
  }
}