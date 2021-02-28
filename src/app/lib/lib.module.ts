import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const Components = [CardComponent]

@NgModule({
  declarations: [Components, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports:[Components]
})
export class LibModule { }
