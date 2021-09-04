import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from './product/add-product/add-product.component';




const routes: Routes = [
	
	{path: 'List', redirectTo: '/', pathMatch: 'full'},
	 {path: 'product', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
