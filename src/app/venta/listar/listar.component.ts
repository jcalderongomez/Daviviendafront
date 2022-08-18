import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { Venta } from '../interfaces/IDataVenta';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['id','fecha','cliente', 'producto', 'descuento','total', 'accion'];
  constructor(private ventaService: VentaService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ventaService.listarVentas();
  }

  get resultados(){
    return this.ventaService.resultados;
  }

  

  actualizarVenta(venta: Venta){
    console.log(venta);
    this.dialog.open(EditarComponent,{
      data:{
        fechaVenta: venta.fechaVenta,
        cliente: venta.cliente,
        producto: venta.producto,
        descuento: venta.descuento,
        total: venta.total,
        id: venta.id
      }
    });
  }
}