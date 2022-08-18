import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedorService } from './proveedor.service';
 
@NgModule({
  declarations: [
    HomeComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents:[EditarComponent],
  providers: [ProveedorService]
})
export class ProveedorModule { }