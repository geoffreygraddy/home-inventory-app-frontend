import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInventoryListComponent } from './home-inventory-list.component';

describe('HomeInventoryListComponent', () => {
  let component: HomeInventoryListComponent;
  let fixture: ComponentFixture<HomeInventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInventoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
