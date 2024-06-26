import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, provideRouter } from '@angular/router';
// import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterModule]
})
export class AboutComponent implements OnInit {
  param: any;
  queryParam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private service: ProductService
  ) {}

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['name'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['occupation'];

    // this.service.getAllProductsWithLimit().subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //   }
    // });
  }
}
