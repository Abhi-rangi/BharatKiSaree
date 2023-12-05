import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DesignerManagementComponent } from './designer-management/designer-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientManagementComponent } from './client-management/client-management.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderListComponent,
    DesignerManagementComponent,
    ClientManagementComponent,
    InventoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
