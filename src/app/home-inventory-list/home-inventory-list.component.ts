import { Component, OnInit } from '@angular/core';
import { HomeInventoryService } from '../services/home-inventory.service';

@Component({
  selector: 'app-home-inventory-list',
  templateUrl: './home-inventory-list.component.html',
  styleUrls: ['./home-inventory-list.component.css']
})
export class HomeInventoryListComponent implements OnInit {

  homeInventory: any;

  constructor(private homeInventoryService: HomeInventoryService) { }

  ngOnInit(): void {
    this.homeInventoryService.getHomeInventoryList().
      subscribe({next: r => this.homeInventory = r, error: e=> console.log(e)});
  }

}
