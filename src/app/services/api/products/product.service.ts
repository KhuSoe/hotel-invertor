import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(limit: number = 5): Observable<ProductRepresentation[]> {
    const apiUrl = `${this.baseUrl}?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(apiUrl);
  }

  createProduct(product: ProductRepresentation): Observable<ProductRepresentation> {
    return this.http.post<ProductRepresentation>(this.baseUrl, product);
  }
}
 