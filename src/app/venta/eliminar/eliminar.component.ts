import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  
  id: any;
  
  venta = {
    fechaVenta: '',
    clienteId: '',
    productoId: '',
    descuento: '',
    total: ''
  }
  
  constructor(private ventaService: VentaService,
              private route: ActivatedRoute,
              private router: Router) { }
  

  ngOnInit(): void {
    console.log(`el id a eliminaaaaaaaaaaaar es: ${this.route.snapshot.paramMap.get('id')}`);
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.ventaService.getVenta(this.id).subscribe((data:any)=>{
      console.log(data);  
      this.venta.fechaVenta = data.resultado.fechaVenta;
      this.venta.clienteId =  data.resultado.clienteId;
      this.venta.productoId = data.resultado.productoId;
      this.venta.descuento =  data.resultado.descuento;
      this.venta.total =      data.resultado.total;
    });
  }


  cancel(){
    this.router.navigate(['/venta']);
  }

  confirmar(){
      this.ventaService.deleteVenta(this.id).subscribe((data: any)=>{
        this.router.navigate(['/venta']);
      })
  }
}
