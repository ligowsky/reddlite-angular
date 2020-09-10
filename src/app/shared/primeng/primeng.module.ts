import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, InputTextModule],
  exports: [ButtonModule, InputTextModule],
})
export class PrimengModule {}
