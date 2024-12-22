import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { DeleteRolesComponent } from './delete-roles/delete-roles.component';
import { ListRolesComponent } from './list-roles/list-roles.component';


@NgModule({
  declarations: [
    RolesComponent,
    CreateRolesComponent,
    EditRolesComponent,
    DeleteRolesComponent,
    ListRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
