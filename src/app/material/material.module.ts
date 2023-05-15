// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// core material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const material  = [
  MatSlideToggleModule,
  MatToolbarModule
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
