import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-image-to-data',
  imports: [NgIf],
  templateUrl: './image-to-data.html',
  
})
export class ImageToData {


  selectedImage: string | null = null
  loading = false

  constructor(private dataservice:Data,private router:Router){}

  onImageSelected(event:any){
    const file= event.target.files[0]
    if(!file) return;
   
    const reader = new FileReader()
    reader.onload=()=>{
      this.selectedImage = reader.result as string
    }

    reader.readAsDataURL(file)

  }

mockOCR(): Product[] {
  return [
    // Grocery Items
    { id: 1, name: "Milk", category: "Grocery", quantity: 10, price: 45, description: "Fresh milk packet" },
    { id: 2, name: "Sugar", category: "Grocery", quantity: 5, price: 55, description: "Refined white sugar 1kg" },
    { id: 3, name: "Tea Powder", category: "Grocery", quantity: 8, price: 120, description: "Premium Assam tea" },
    { id: 4, name: "Rice", category: "Grocery", quantity: 15, price: 65, description: "Basmati rice 5kg pack" },
    { id: 5, name: "Cooking Oil", category: "Grocery", quantity: 6, price: 180, description: "Sunflower oil 1L" },

    // Household Items
    { id: 6, name: "Soap", category: "Household", quantity: 20, price: 30, description: "Detergent bathing soap" },
    { id: 7, name: "Toothpaste", category: "Household", quantity: 12, price: 55, description: "Mint flavor 150g" },
    { id: 8, name: "Shampoo", category: "Household", quantity: 9, price: 120, description: "Anti-dandruff 200ml" },
    { id: 9, name: "Mop", category: "Household", quantity: 4, price: 250, description: "360° spin floor mop" },
    { id: 10, name: "Towel", category: "Household", quantity: 10, price: 150, description: "Soft cotton towel" },

    // Electronics
    { id: 11, name: "Headphones", category: "Electronics", quantity: 5, price: 899, description: "Wireless Bluetooth headset" },
    { id: 12, name: "USB Cable", category: "Electronics", quantity: 25, price: 150, description: "Type-C fast charging cable" },
    { id: 13, name: "Power Bank", category: "Electronics", quantity: 3, price: 1499, description: "10,000 mAh portable charger" },
    { id: 14, name: "Mouse", category: "Electronics", quantity: 7, price: 450, description: "Wireless optical mouse" },
    { id: 15, name: "Keyboard", category: "Electronics", quantity: 4, price: 850, description: "Ergonomic mechanical keyboard" },

    // Stationery
    { id: 16, name: "Notebook", category: "Stationery", quantity: 30, price: 40, description: "A4 ruled notebook 200 pages" },
    { id: 17, name: "Pen", category: "Stationery", quantity: 50, price: 10, description: "Blue ballpoint pen" },
    { id: 18, name: "Marker", category: "Stationery", quantity: 15, price: 25, description: "Permanent black marker" },
    { id: 19, name: "Highlighter", category: "Stationery", quantity: 12, price: 35, description: "Yellow color highlighter" },
    { id: 20, name: "Stapler", category: "Stationery", quantity: 5, price: 90, description: "Medium size office stapler" }
  ];
}


  convertToTable(){
    if(!this.selectedImage){
      alert('please upload an image first')
    }

    this.loading=true;
    setTimeout(()=>{
      const extractData = this.mockOCR()
      this.dataservice.setProduct(extractData)
      this.router.navigate(['/products'])
    },2000)
  }

}
