import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  bootstrap: [MenuComponent]
})
export class LayoutModule { }
