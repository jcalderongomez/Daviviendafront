import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
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
              private clienteService: ClienteService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: {cedula: string, nombre: string, apellido: string, direccion: string, telefono: string, id: number}) { 
                this.id = data.id;
                this.form = fb.group({
                  cedula    : [data.cedula, Validators.required],
                  nombre    : [data.nombre, Validators.required],
                  apellido  : [data.apellido, Validators.required],
                  direccion : [data.direccion, Validators.required],
                  telefono  : [data.telefono, Validators.required],
                })
              }

              ngOnInit(): void {

              }
            
            

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.form.value.id = this.id;
    this.clienteService.actualizarCliente(this.id, this.form.value).subscribe((data)=>{
    this.router.navigate(['/cliente']);
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
