import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Product } from '../../models/product.model'; 
import { Data } from '../../services/data';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ]
})
export class ProductList implements AfterViewInit {
  displayedColumns: string[] = ['name', 'category', 'quantity', 'price'];
  dataSource = new MatTableDataSource<Product>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: Data, private router: Router) {
    const data = this.dataService.getProducts();
    this.dataSource.data = data;

    if (!data.length) {
      alert('No data found. Upload an image first');
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onRowClick(row: Product) {
    this.router.navigate(['/products', row.id]);
  }
}
