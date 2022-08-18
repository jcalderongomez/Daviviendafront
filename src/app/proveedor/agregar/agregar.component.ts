import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from '../proveedor.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  
  proveedorForm: FormGroup
  
    constructor(private fb: FormBuilder,
    private proveedorService: ProveedorService,
    private router: Router) { 
      this.proveedorForm = this.fb.group({
        rut       : [''],
        nombre    : [''],
        telefono  : [''],
        pagina    : ['']
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.proveedorForm.value);
    this.proveedorService.crearProveedor(this.proveedorForm.value).subscribe((data:any)=>{
      Swal.fire(
        'Registro Proveedor?',
        'El proveedor fue registrado',
        'success'
      )
      this.router.navigate(['/proveedor'])
    })
  }
}
   


