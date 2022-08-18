import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2'
import { ProveedorService } from 'src/app/proveedor/proveedor.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  productoForm: FormGroup
  
  constructor(private fb: FormBuilder,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private router: Router) { 
      this.productoForm = this.fb.group({
        nombre      : [''],
        precio      : [''],
        stock       : [''],
        proveedorId : ['']
      })
    }

  ngOnInit(): void {
    this.proveedorService.listarProveedores();
  }

  get resultados(){
    return this.proveedorService.resultados;
  }


  onSubmit(){
    console.log(this.productoForm.value);
    this.productoService.crearProducto(this.productoForm.value).subscribe((data:any)=>{
      Swal.fire(
        'Registro Producto?',
        'El prodcucto fue registrado',
        'success'
      )
      this.router.navigate(['/producto'])
    })
  }
}