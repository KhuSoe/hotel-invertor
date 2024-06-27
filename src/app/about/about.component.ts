import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { CommonModule } from '@angular/common';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterModule, HttpClientModule, CommonModule],
  providers: [ProductService],
})
export class AboutComponent implements OnInit {
  products: ProductRepresentation[] = [];
  param: any;
  queryParam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['name'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['occupation'];

    const newProduct: ProductRepresentation = {
      titles: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      image: 'https://picsum.photos/200/300',
    };

    this.productService.createProduct(newProduct).subscribe({
      next: (result: ProductRepresentation) => {
        console.log('Product created:', result);
        this.products.push(result);
      },
      error: (err: any) => { // Specify the error type
        console.error('Error creating product:', err);
      }
    });

    this.productService.getProducts().subscribe(data => {
      console.log('API Response:', data);
      this.products = data;
    });
  }
}
