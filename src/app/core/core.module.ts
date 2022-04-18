import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormPipe } from './pipe/norm.pipe';

@NgModule({
  declarations: [NormPipe],
  exports: [NormPipe],
  imports: [CommonModule],
})
export class CoreModule {}
