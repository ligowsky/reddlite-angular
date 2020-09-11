import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, PrimengModule],
  exports: [PrimengModule, ReactiveFormsModule],
})
export class SharedModule {}
