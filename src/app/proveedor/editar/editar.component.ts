import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';


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
              private proveedorService: ProveedorService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: {rut: string,nombre: string, telefono: string, pagina: string, id: number} ) 
              
              { 

      this.id = data.id;
      this.form = fb.group({
        rut       : [data.rut, Validators.required],
        nombre    : [data.nombre, Validators.required],
        telefono  : [data.telefono, Validators.required],
        pagina    : [data.pagina, Validators.required],
      })
    }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    
    this.form.value.id = this.id;
    this.proveedorService.actualizarProveedor(this.id, this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/proveedor']);
    window.location.reload();
  });
  this.dialogRef.close();
  }
}
