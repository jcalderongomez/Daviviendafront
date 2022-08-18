import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from '../material/material.module';
import { ClienteService } from './cliente.service';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    HomeComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
