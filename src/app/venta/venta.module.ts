import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { VentaRoutingModule } from './venta-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaService } from './venta.service';

@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents:[EditarComponent],
  providers: [VentaService]
})
export class VentaModule { }
