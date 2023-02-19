import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DbServiceService {
  baseUrl: string = 'http://localhost:3000/productList';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(body: Product): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id`);
  }

  updateProduct(id: string, body: Product): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, body);
  }
}
