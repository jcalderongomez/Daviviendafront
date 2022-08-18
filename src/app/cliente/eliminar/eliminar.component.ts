import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  id: any;
  
  cliente = {
    cedula: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  }
  
  constructor(private clienteService: ClienteService,
              private route: ActivatedRoute,
              private router: Router) { }
  

  ngOnInit(): void {
    console.log(`el id a eliminaaaaaaaaaaaar es: ${this.route.snapshot.paramMap.get('id')}`);
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.clienteService.getCliente(this.id).subscribe((data:any)=>{
      console.log(data);  
      this.cliente.cedula     = data.resultado.cedula;
      this.cliente.nombre     = data.resultado.nombre;
      this.cliente.apellido   = data.resultado.apellido;
      this.cliente.direccion  = data.resultado.direccion;
      this.cliente.telefono   = data.resultado.telefono;
    });
  }


  cancel(){
    this.router.navigate(['/cliente']);
  }

  confirmar(){
      console.log(this.clienteService.deleteCliente(this.id));
      this.clienteService.deleteCliente(this.id).subscribe((data: any)=>{
        Swal.fire(
          'Eliminar Cliente?',
          'El cliente fue eliminado',
          'success'
        )
        this.router.navigate(['/cliente']);

      })
  }
}