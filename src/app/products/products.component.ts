import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [ProductDetailsComponent],
})
export class ProductsComponent implements OnInit {
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

    this.productService.getProducts().subscribe({
      next: (result ) => {
        console.log(result);
      },
      error: (err: any) => {
        // Specify the error type
        console.error('Error creating product:', err);
      },
    });

    // this.productService.getProducts().subscribe(data => {
    //   console.log('API Response:', data);
    //   this.products = data;
    // });
  }
}
