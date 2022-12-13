import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeInventoryService } from '../services/home-inventory.service';

@Component({
  selector: 'app-home-inventory-form',
  templateUrl: './home-inventory-form.component.html',
  styleUrls: ['./home-inventory-form.component.css']
})
export class HomeInventoryFormComponent implements OnInit {

  model: any = {
    name: '',
    modelNumber: '',
    serialNumber: '',
    description: '',
    amountPaid: '',
    purchasedDate: '',
    purchasedFrom: '',
    location: '',
  }

  constructor(private router: Router,
              private homeinventoryService: HomeInventoryService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.homeinventoryService.createHomeInventoryItem(this.model).
      subscribe({next: r => this.router.navigate(['/']), error: e => console.log(e)});
  }

}
