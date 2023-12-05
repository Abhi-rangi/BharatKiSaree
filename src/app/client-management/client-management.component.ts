import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  clientsWithOrders: any[] = [];
  orderDetails: any[] =[];
  OrderDetailsCard = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClientsWithOrders();
  }

  a = {
    ClientID: 'C1',
    ClientName: 'Client One',
    ClientShipmentAddress: '123 Main St, City',
    OrderDetailID: 'OD1',
    OrderID: 'O1',
    SareeID: 'S1',
    ShipmentID: 'SH1',
    deliveryAddress: '123 Main St, City',
    deliveryDate: '2023-02-10T05:00:00.000Z',
    orderStatus: 'PROCESSING',
    orerDate: '2023-02-01T05:00:00.000Z',
    quantity: 2,
    sareeType: 'Silk Saree',
  };
  fetchClientsWithOrders(): void {
    // Make an HTTP request to fetch client details with associated orders, order details, and shipment details
    this.http
      .get<any[]>('http://localhost:3000/client-info')
      .subscribe((data) => {
        console.log(data);
        this.clientsWithOrders = data;
      });
  }
  // getOrderDetails
  fetchOrderDetails(clientID:string):void {
    this.http
      .get<any[]>('http://localhost:3000/OrderDetails/' + clientID)
      .subscribe((data) => {
        console.log("Order and it's OrderDetails of CLient :"+clientID);
        console.log(data);
        this.orderDetails = data;
      });
    this.OrderDetailsCard = true;
    this.orderDetails.forEach((order) => (order.isExpanded = false));
  }
  onCancel():void {
    this.OrderDetailsCard = false;
    this.orderDetails = [];
  }
  toggleOrderDetails(order: any): void {
    order.isExpanded = !order.isExpanded;

  }
}
