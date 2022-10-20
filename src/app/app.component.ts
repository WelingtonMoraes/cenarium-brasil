import { Component, NgModule } from '@angular/core';
import { SwiperEvents } from 'swiper/types';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cenarium';

  onBeforeTransition(
    eventParams: Parameters<SwiperEvents['beforeTransitionStart']>
  ) {
    const [swiper, speed, internal] = eventParams;
    console.log({ swiper, speed, internal });
  }

  public openTab(_tab: string) {
    console.log(_tab);
  }
}
