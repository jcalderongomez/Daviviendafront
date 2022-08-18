import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { Proveedor } from '../interfaces/IDataProveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','rut', 'nombre', 'telefono', 'pagina','accion'];
  constructor(private proveedorService: ProveedorService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.proveedorService.listarProveedores();
  }

  get resultados(){
    return this.proveedorService.resultados;
  }

  actualizarProveedor(proveedor: Proveedor){
    this.dialog.open(EditarComponent,{
      data:{
        rut: proveedor.rut,
        nombre: proveedor.nombre,
        telefono: proveedor.telefono,
        pagina: proveedor.pagina,
        id: proveedor.id
      }
    });
  }
}