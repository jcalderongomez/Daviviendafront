import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  
  id: any;
  
  producto = {
    nombre: '',
    precio: '',
    stock: '',
    proveedor: ''
  }
  
  constructor(private productoService: ProductoService,
              private route: ActivatedRoute,
              private router: Router) { }
  

  ngOnInit(): void {
    console.log(`el id a eliminar es: ${this.route.snapshot.paramMap.get('id')}`);
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(this.id).subscribe((data:any)=>{      
      this.producto.nombre = data.resultado.nombre;
      this.producto.precio = data.resultado.precio;
      this.producto.stock = data.resultado.stock;
    });
  }


  cancel(){
    this.router.navigate(['/producto']);
  }

  confirmar(){
      this.productoService.deleteProducto(this.id).subscribe((data: any)=>{
        this.router.navigate(['/producto']);
        Swal.fire(
          'Eliminar producto',
          'El prodcucto fue eliminado',
          'success'
        )
      })
  }
}
