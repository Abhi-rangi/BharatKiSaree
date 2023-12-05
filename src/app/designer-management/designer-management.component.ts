// designer-management.component.ts
import { Component, OnInit } from '@angular/core';
import { DesignerService } from 'src/app/designer-management/designer-service';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

interface Designer {
  DesignerID: string,
  DesignerName: String,
  DesignerPhone: String,
  DesignerEmail: String,
}

@Component({
  selector: 'app-designer-management',
  templateUrl: './designer-management.component.html',
  styleUrls: ['./designer-management.component.css'],
})

export class DesignerManagementComponent implements OnInit {

  designers: any[] | undefined;
  newDesigner: Designer = {
    DesignerID: "",
    DesignerName: "",
    DesignerPhone: "",
    DesignerEmail: "",

  }; // Object to hold new designer data
  newSaree: any = {
    DesignerID: "",
    SareeID: "",
    sareeType: "",
    price: "",
    description: ""
  }
  isCardOpen = false;
  isCardPopupActive = false;

  isPopupVisible = false;
  popupData: any[] = [];
  isAddCardOpen: boolean = false;
  AddCardOpenActive: boolean = false;

  constructor(private designerService: DesignerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDesigners();
  }
  openAddDesignerCard(): void {
    this.isCardOpen = true;
    this.toggleCardPopup();
  }
  openAddSAREECard(): void {
    this.isAddCardOpen = true;
    this.AddCardOpenActive = !this.AddCardOpenActive;
  }
  getDesigners() {
    this.designerService.getDesigners().subscribe(
      data => {
        this.designers = data;
      },
      error => {
        console.error('Error fetching designers:', error);
      }
    );
  }

  addDesigner() {
    this.designerService.addDesigner(this.newDesigner).subscribe(
      response => {
        console.log('Designer added successfully:', response);
        // Reset the form after adding a designer
        this.newDesigner = {
          DesignerID: '',
          DesignerName: '',
          DesignerPhone: '',
          DesignerEmail: ''
        };
        // Fetch designers again to update the list
        this.getDesigners();
      },
      error => {
        console.error('Error adding designer:', error);
      }
    );
    this.isCardOpen = false;
    this.toggleCardPopup();
  }
  addSaree() {
    this.designerService.addSaree(this.newSaree).subscribe(
      response => {
        console.log('Saree added successfully:', response);
        // Reset the form after adding a designer
        this.newSaree = {
          DesignerID: "",
          SareeID: "",
          sareeType: "",
          price: "",
          description: ""
        };
        // Fetch designers again to update the list
      },
      error => {
        console.error('Error adding designer:', error);
      }
    );
    this.isAddCardOpen = false;
    this.AddCardOpenActive = !this.AddCardOpenActive;
  }

  cancelForm() {
    // Reset editingOrder and hide the card
    this.newDesigner = {
      DesignerID: '',
      DesignerName: '',
      DesignerPhone: '',
      DesignerEmail: ''
    };
    this.toggleCardPopup();
    // this.isAddCardOpen = false;
  }
  cancelSareeForm() {
    this.newSaree = {
      DesignerID: "",
      SareeID: "",
      sareeType: "",
      price: "",
      description: ""
    };
    // this.isAddCardOpen = false;
    this.AddCardOpenActive = !this.AddCardOpenActive;
  }
  // Function to toggle the card pop-up
  toggleCardPopup() {
    this.isCardPopupActive = !this.isCardPopupActive;
  }

  // Function to close the card pop-up
  closeCardPopup() {
    this.isCardPopupActive = false;
    // this.isAddCardOpen = false;
    this.AddCardOpenActive = !this.AddCardOpenActive;

  }



  showPopupTable(id: string, name: string) {
    // Populate the pop-up table with data
    this.designerService.getSaree(id).subscribe(
      data => {
        this.popupData = data;
        this.popupData.forEach(popupData => {
          popupData['DesignerName'] = name;
        });
        console.log(data);
        console.log(this.popupData);
      },
      error => {
        console.error('Error fetching sarees:', error);
      }
    );


    // Display the pop-up table
    this.isPopupVisible = true;
  }

  closePopupTable() {
    // Hide the pop-up table
    this.isPopupVisible = false;
  }
}
