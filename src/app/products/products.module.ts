import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import {SharedModule} from "../shared/shared.module";
import { SelectedComponent } from './components/selected/selected.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SelectedComponent,
    ProductComponent,

  ],
  exports: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SharedModule,
  ],
  imports: [
    CommonModule
  ]
})

export class ProductsModule { }
