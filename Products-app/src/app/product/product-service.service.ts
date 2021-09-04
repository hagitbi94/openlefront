import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService{
	
	private url = 'http://localhost:8095/product';
	
	
	 constructor(private http: HttpClient) {
  }
  
  
   getProducts(): Observable<any> {
    return this.http.get(`${this.url}/List`);
  }

  addProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.url}/AddItems`, product);
  }

deleteProduct(itemNo: string): Observable<any> {
   return this.http.delete(`${this.url}/DeleteItem/${itemNo}`, {responseType: 'text'});
 }
  
editProduct(itemNo: string): Observable<any> {
   return this.http.put(`${this.url}/Withdrawal/${itemNo}`, {responseType: 'text'});
 }	
	
}