import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  ClienteForm: FormGroup
  
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router) { 
      this.ClienteForm = this.fb.group({
        cedula    : [''],
        nombre    : [''],
        apellido  : [''],
        direccion : [''],
        telefono  : ['']
      })    
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ClienteForm.value);
    this.clienteService.crearCliente(this.ClienteForm.value).subscribe((data:any)=>{
      Swal.fire(
        'Registro Cliente?',
        'El cliente fue registrado',
        'success'
      )
      this.router.navigate(['/cliente'])
    })

  }
}
