import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductsDetailsComponent} from "./products/components/products-details/products-details.component";
import {CartComponent} from "./carts/components/cart/cart.component";
import {ObservableComponent} from "./components/observable/observable.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  {path:"products" ,component :AllProductsComponent},
  {path:"details" ,component :ProductsDetailsComponent},
  {path:"cart" ,component :CartComponent},
  {path:"count",component:ObservableComponent},
  {path:"form",component:FormComponent},

  {path:"**" ,redirectTo:"products" ,pathMatch:"full"} // if customer write wrong path .>> redirect to products page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
