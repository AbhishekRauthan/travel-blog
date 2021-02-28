import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const Components = [CardComponent]

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule
  ],
  exports:[Components]
})
export class LibModule { }
