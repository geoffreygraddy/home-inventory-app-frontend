import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInventoryFormComponent } from './home-inventory-form/home-inventory-form.component';
import { HomeInventoryListComponent } from "./home-inventory-list/home-inventory-list.component";

const routes: Routes = [
  { path: '', component: HomeInventoryListComponent},
  { path: 'add', component: HomeInventoryFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
