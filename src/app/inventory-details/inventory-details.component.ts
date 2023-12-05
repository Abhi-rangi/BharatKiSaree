import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from './inventory.service'

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {
  
  inventoryDetails: any; // Adjust the type based on your actual data model

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getInventoryDetails();
    });
  }

  getInventoryDetails() {
    this.inventoryService.getInventoryDetails().subscribe(
      (data) => {
        this.inventoryDetails = data;
      },
      (error) => {
        console.error('Error fetching inventory details:', error);
      }
    );
  }
}