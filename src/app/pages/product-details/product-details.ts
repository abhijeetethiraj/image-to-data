import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [MatCard,NgIf],
  templateUrl: './product-details.html',
 
})
export class ProductDetails {

product?: Product

constructor(
  private route:ActivatedRoute,
  private router: Router,
  private dataService :Data
){
 
  const id= Number(this.route.snapshot.paramMap.get('id'))
  this.product=this.dataService.getProductById(id)

   if (!this.product) {
      alert("Invalid product! No data available.");
      this.router.navigate(['/products']);
    }

    
}

  goBack() {
    this.router.navigate(['/products']);
  }
}
