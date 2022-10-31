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
import { SpecialityService } from './services/speciality.service';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  title = 'cenarium';

  //icons
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;

  //array objetos
  whatWeDo: any;
  speciality: any;
  team: any;

  //swiper
  swiperConfig: any = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
      },
      1080: {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
      },
    },
  };

  constructor(
    private whatWeDoService: WhatWeDoService,
    private specialityService: SpecialityService,
    private teamService: TeamService
  ) {}

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit(): void {
    this.whatWeDoService.getWhatWedo().subscribe((data: any) => {
      this.whatWeDo = data;
    });

    this.specialityService.getSpeciality().subscribe((data: any) => {
      console.log(data);
      this.speciality = data;
    });

    this.teamService.getTeam().subscribe((data: any) => {
      this.team = data;
    });
  }

  openModal() {
    console.log('teste');
  }

  public openTab(_tab: string) {
    console.log(_tab);
  }
}
