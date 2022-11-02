import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
  title = 'Cenarium Brasil';

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
    private teamService: TeamService,
    private el: ElementRef
  ) {}

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit(): void {
    this.onCloseWhenClickingOnMobile();

    this.whatWeDoService.getWhatWedo().subscribe((data: any) => {
      console.log(data);
      this.whatWeDo = data;
    });

    this.specialityService.getSpeciality().subscribe((data: any) => {
      console.log(data);
      this.speciality = data;
    });

    this.teamService.getTeam().subscribe((data: any) => {
      console.log(data);
      this.team = data;
    });
  }

  onCloseOnMobile() {
    // removes the visibility class and adds the hidden class.
    this.el.nativeElement.classList.remove('show-menu');
    this.el.nativeElement.classList.add('hide-menu');
  }

  onCloseWhenClickingOnMobile() {
    // just on mobile devices.
    if (window.innerWidth <= 1023) {
      // when the menu or backdrop is clicked the menu is closed.
      this.el.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile();
      });
    }
  }

  public openTab(_tab: string) {
    console.log(_tab);

    switch (_tab) {
      case 'tab1': {
        //statements;
        break;
      }
      case 'tab2': {
        //statements;
        break;
      }
      case 'tab3': {
        //statements;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
}
