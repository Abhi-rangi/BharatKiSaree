// order-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Order {
  OrderID: number;
  orerDate: Date;
  orderStatus: string;
  UserID: number;
  ClientID: string;
  DesignerID: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];
  editingOrder: Order | null = null;
  orderStatusOptions: string[] = ['DELIVERED', 'PROCESSED', 'PROCESSING', 'SHIPPED']; // Enum values
  isCardPopupActive = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const apiUrl = 'http://localhost:3000/orders';

    this.http.get<any>(apiUrl).subscribe(
      data => {
        this.orders = data;
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  editOrder(order: any) {
    // Set the editingOrder and show the card
    this.editingOrder = { ...order };
    this.toggleCardPopup();
  }

  saveChanges() {
    // Implement logic to save changes to the backend
    console.log('Saving changes:', this.editingOrder);
    this.ordersUpdate(this.editingOrder).subscribe(
      response => {
        console.log("Orders updated Successfully, also check the Inventory for that order related Sarees", response);
        this.editingOrder = null;
        this.toggleCardPopup();
      },
      
      error => {
        console.error('Error updating Orders:', error);
      }

    ); 
    
    // Reset editingOrder and hide the card
    
  }
  

  ordersUpdate(editingOrder: any): Observable<any> {
    return this.http.post('http://localhost:3000/ordersUpdate', editingOrder);
  }


  cancelEdit() {
    // Reset editingOrder and hide the card
    this.editingOrder = null;
    this.toggleCardPopup();
  }

  // Function to toggle the card pop-up
  toggleCardPopup() {
    this.isCardPopupActive = !this.isCardPopupActive;
  }

  // Function to close the card pop-up
  closeCardPopup() {
    this.isCardPopupActive = false;
  }
}
