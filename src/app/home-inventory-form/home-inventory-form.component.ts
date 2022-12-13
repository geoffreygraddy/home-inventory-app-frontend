import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inventory-form',
  templateUrl: './home-inventory-form.component.html',
  styleUrls: ['./home-inventory-form.component.css']
})
export class HomeInventoryFormComponent implements OnInit {

  model: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {}

}
