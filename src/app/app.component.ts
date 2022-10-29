import { MatIconModule } from '@angular/material/icon';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//API
import { WhatWeDoService } from './services/what-we-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  title = 'cenarium';
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;

  swiperConfig: any = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: true,
    breakpoints: {
      1080: {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
      },
      480: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
      },
    },
  };

  constructor(private whatWeDo: WhatWeDoService) {
    this.whatWeDo.getWhatWeDo().subscribe((data: any) => {
      console.warn(data);
    });
  }

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  public openTab(_tab: string) {
    console.log(_tab);
  }
}
