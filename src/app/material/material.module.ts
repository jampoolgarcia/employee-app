import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// core modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const material  = [
  MatSlideToggleModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
