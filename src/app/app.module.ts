import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './components/modal-item/modal-item.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ModalModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
