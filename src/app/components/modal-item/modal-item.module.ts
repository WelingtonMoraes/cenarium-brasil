import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal-item.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [ModalComponent],
})
export class ModalModule {}
