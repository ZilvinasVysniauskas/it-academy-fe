import { NgModule } from '@angular/core';
import { AdminModuleComponent } from './admin-module.component';
import {SharedComponentsModuleModule} from "../../shared-componets-module/shared-components-module.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminAddUserComponent} from "./components/adim-add-user/adim-add-user.component";
import {EditUserFormComponent} from "./components/forms/edit-user-form/edit-user-form.component";
import {SearchUserComponent} from "./components/forms/search-user/search-user.component";
import {UserDialogComponentComponent} from "./modal/user-dialog-component/user-dialog-component.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponent,
    AdminAddUserComponent,
    EditUserFormComponent,
    SearchUserComponent,
    UserDialogComponentComponent
  ],
  imports: [
    RouterModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatOptionModule,
    SharedComponentsModuleModule,
    MatDialogModule,
    MatSelectModule,
  ]
})
export class AdminModuleModule { }
