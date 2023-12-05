// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignerManagementComponent } from './designer-management/designer-management.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'inventory', component: InventoryDetailsComponent }, // Add this line
  { path: 'orders', component: OrderListComponent }, // Add this line
  { path: 'designer-management', component: DesignerManagementComponent }, // Add this line
  { path: 'client-management', component: ClientManagementComponent }, // Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
