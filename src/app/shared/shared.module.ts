import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TestComponent } from './components/test/test.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    TestComponent,





  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    TestComponent


  ]
})
export class SharedModule { }
