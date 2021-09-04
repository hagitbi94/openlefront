import { Component , OnInit} from '@angular/core';
import {Products} from './product/product';
import {ProductService} from './product/product-service.service';
import {Router} from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products';
  products!: Products[];
  
  constructor(private router: Router, private productService: ProductService) {
  }
  
  
  getProducts(){
	this.productService.getProducts().subscribe(data => {
		this.products = data;
	})
}
  
  
  addProduct(): void{
	this.router.navigate(['product']).then((e) =>{
		if(e){
			console.log("Navigation is successful!");
		}else {
          console.log("Navigation has failed!");
        }
	});
};
  
  deleteProduct(product: Products) { this.productService.deleteProduct(product.itemNo).subscribe(data => {
		this.products = data}); this.router.navigate(['Lis']); }
  
   editProduct(product: Products) { this.productService.editProduct(product.itemNo).subscribe(data => {
		this.products = data}); this.router.navigate(['Lis']); }
  
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getProducts();
    });
  }
  
  
}
