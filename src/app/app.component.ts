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
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//API
import { WhatWeDoService } from './services/what-we-do.service';
import { SpecialityService } from './services/speciality.service';
import { TeamService } from './services/team.service';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('modal') modal: any;

  title = 'Cenarium Brasil';
  idEspecialist: string = '';
  loadSpecialties: boolean = true;

  //icons
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faBars = faBars;
  faXmark = faXmark;

  //array objetos
  whatWeDo: any;
  speciality: any;
  team: any;
  isMenuOpen: boolean = true;

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
    private contactService: ContactService,
    private el: ElementRef
  ) {}

  scroll(el: HTMLElement, closeMenu?: boolean) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (closeMenu) {
      this.toggleMenu();
    }
  }

  ngOnInit(): void {
    this.whatWeDoService.getWhatWedo().subscribe((data: any) => {
      this.whatWeDo = data;
    });

    this.specialityService.getSpeciality().subscribe((data: any) => {
      this.speciality = data;
      this.loadSpecialties = false;
    });

    this.teamService.getTeam().subscribe((data: any) => {
      this.team = data;
    });
  }

  public toggleMenu() {
    let openMenu = this.el.nativeElement.querySelector('#menuMobile');
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      openMenu.classList.add('menuMobileClose');
    } else {
      openMenu.classList.remove('menuMobileClose');
    }
  }

  public openModal(_id: string) {
    this.idEspecialist = _id;
    this.modal.idKey = _id;
    this.modal.toggle();
  }

  public sendEmail(name: string, contact: string, idea: string) {
    this.contactService
      .sendEmail(name, contact, idea)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  public openTab(_tab: number) {
    let desfile = this.el.nativeElement.querySelector('.DESFILE');
    let atracao = this.el.nativeElement.querySelector('.ATRACAO');
    let concerto = this.el.nativeElement.querySelector('.CONCERTO');

    let openTab1 = this.el.nativeElement.querySelector('.openTab1');
    let openTab2 = this.el.nativeElement.querySelector('.openTab2');
    let openTab3 = this.el.nativeElement.querySelector('.openTab3');

    switch (_tab) {
      case 1: {
        openTab1.classList.add('active');
        openTab2.classList.remove('active');
        openTab3.classList.remove('active');

        desfile.classList.remove('hidden');
        atracao.classList.add('hidden');
        concerto.classList.add('hidden');
        break;
      }
      case 2: {
        openTab1.classList.remove('active');
        openTab2.classList.add('active');
        openTab3.classList.remove('active');

        desfile.classList.add('hidden');
        atracao.classList.remove('hidden');
        concerto.classList.add('hidden');
        break;
      }
      case 3: {
        openTab1.classList.remove('active');
        openTab2.classList.remove('active');
        openTab3.classList.add('active');

        desfile.classList.add('hidden');
        atracao.classList.add('hidden');
        concerto.classList.remove('hidden');
        break;
      }
      default: {
        desfile.classList.remove('hidden');
        atracao.classList.add('hidden');
        concerto.classList.add('hidden');
        break;
      }
    }
  }
}
