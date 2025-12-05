import { RouterModule, Routes } from '@angular/router';
import { ImageToData } from './pages/image-to-data/image-to-data';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:ImageToData},
    {path:'products',component:ProductList},
    {path:'products/:id',component:ProductDetails}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
