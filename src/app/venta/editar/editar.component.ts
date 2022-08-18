import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProductoService } from 'src/app/producto/producto.service';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
   
  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditarComponent>,
              private ventaService: VentaService,
              private clienteService: ClienteService,
              private productoService: ProductoService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: {fechaVenta: string, cliente: string, producto: string, descuento: string, total: string, id: number} ) 
              
              { 

      this.id = data.id;
      this.form = fb.group({
        fechaVenta        : [data.fechaVenta, Validators.required],
        cliente           : [data.cliente, Validators.required],
        producto          : [data.producto, Validators.required],
        descuento         : [data.descuento, Validators.required],
        total             : [data.total, Validators.required],
      })
    }

  ngOnInit(): void {
    this.clienteService.listarClientes();
    this.productoService.listarProductos();
  }

  cerrar(){
    this.dialogRef.close();
  }

  get resultadosCliente(){
    return this.clienteService.resultados;
  }

  get resultadosProducto(){
    return this.productoService.resultados;
  }
  
  guardar(){
    this.form.value.id = this.id;
    this.ventaService.actualizarVenta(this.id, this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/venta']);
    window.location.reload();
  });
  this.dialogRef.close();
  }
}
