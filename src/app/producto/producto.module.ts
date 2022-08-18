import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductoService } from './producto.service';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    EliminarComponent,
    AgregarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService
  ]
})
export class ProductoModule { }
