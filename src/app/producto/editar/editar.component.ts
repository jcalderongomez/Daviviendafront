import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/proveedor/proveedor.service';
import { ProductoService } from '../producto.service';
  import Swal from 'sweetalert2'

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
              private productoService: ProductoService,
              private proveedorService: ProveedorService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: {nombre: string, precio: string, stock: string, proveedor: string, id: number}) { 
                this.id = data.id;
                this.form = fb.group({
                  nombre      : [data.nombre, Validators.required],
                  precio      : [data.precio, Validators.required],
                  stock       : [data.stock, Validators.required],
                  proveedorId : [data.proveedor, Validators.required],
                })
              }

              ngOnInit(): void {
                this.proveedorService.listarProveedores();
              }
            
              get resultados(){
                return this.proveedorService.resultados;
              }
            

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.form.value.id = this.id;
    this.productoService.actualizarProducto(this.id, this.form.value).subscribe((data)=>{
    this.router.navigate(['/producto']);
    window.location.reload();
  });
  this.dialogRef.close();
  Swal.fire(
    'Actualizar producto',
    'El prodcucto fue actualizado',
    'success'
  )
  }
}
