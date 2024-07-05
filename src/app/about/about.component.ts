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
export class AboutComponent {
  
}
