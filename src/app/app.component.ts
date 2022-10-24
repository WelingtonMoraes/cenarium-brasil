import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent
  title = 'cenarium';

  public openTab(_tab: string) {
    console.log(_tab);
  }
}
