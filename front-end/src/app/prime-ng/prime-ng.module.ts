import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports:[
    CommonModule,
  ],
  exports: [
    CommonModule ,
   
    
    CheckboxModule,
    TableModule,
    ToastModule
  
  ]
})
export class PrimeNgModule { }
