import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; 
@Injectable({
  providedIn: 'root',
})
export class Data {

private products:Product[]=[]

setProduct(data: Product[]){
  this.products=data
}
getProducts():Product[]{
  return this.products;
}
getProductById(id:number): Product | undefined{
  return this.products.find(p=> p.id === id)
}
  
}
