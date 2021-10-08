import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateButtonComponent } from './private-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PrivateButtonComponent],
  exports: [PrivateButtonComponent],
})
export class PrivateButtonModule {}
