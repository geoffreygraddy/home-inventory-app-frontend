import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeInventoryService {

  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }

  getHomeInventoryList() {
    return this.http.get<{}[]>(`${this.baseUrl}/api/v1/home-inventory`);
  }

  getHomeInventoryItem(id: any) {
    return this.http.get<{}[]>(`api/v1/home-inventory/${id}`);
  }

  createHomeInventoryItem(recipe: any) {
    return this.http.post(`api/v1/home-inventory`, recipe);
  }

  updateHomeInventoryItem(id: any, recipe: any) {
    return this.http.post(`api/v1/home-inventory/${id}`, recipe);
  }

  deleteHomeInventoryItem(id: any) {
    return this.http.delete(`api/v1/home-inventory/${id}`);
  }
}
