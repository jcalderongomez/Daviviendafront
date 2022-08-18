import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  
  id: any;
  
  proveedor = {
    rut: '',
    nombre: '',
    telefono: '',
    pagina: ''
  }
  
  constructor(private proveedorService: ProveedorService,
              private route: ActivatedRoute,
              private router: Router) { }
  

  ngOnInit(): void {
    console.log(`el id a eliminaaaaaaaaaaaar es: ${this.route.snapshot.paramMap.get('id')}`);
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.proveedorService.getProveedor(this.id).subscribe((data:any)=>{
      console.log(data);  
      this.proveedor.rut = data.resultado.rut
      this.proveedor.nombre = data.resultado.nombre;
      this.proveedor.telefono = data.resultado.telefono;
      this.proveedor.pagina = data.resultado.pagina;
    });
  }


  cancel(){
    this.router.navigate(['/proveedor']);
  }

  confirmar(){
      this.proveedorService.deleteProveedor(this.id).subscribe((data: any)=>{
        this.router.navigate(['/proveedor']);
      })
  }
}
