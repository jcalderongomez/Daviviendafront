import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { Producto } from '../interfaces/IDataProducto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre', 'precio', 'stock', 'proveedor','accion'];
  constructor(private productoService: ProductoService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productoService.listarProductos();
  }

  get resultados(){
    return this.productoService.resultados;
  }

  actualizarProducto(producto: Producto){
    console.log(producto);
    this.dialog.open(EditarComponent,{
      data:{
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
        proveedor: producto.proveedorId,
        id: producto.id
      }
    });   
  }

}
