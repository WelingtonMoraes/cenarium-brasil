import { MatIconModule } from '@angular/material/icon';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      480: {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
      },
    },
  };

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  public openTab(_tab: string) {
    console.log(_tab);
  }
}
