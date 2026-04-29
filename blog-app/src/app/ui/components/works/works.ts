import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Work } from "../work/work";

@Component({
  selector: 'app-works',
  imports: [Work],
  templateUrl: 'works.html',
  styleUrl: 'works.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Works { 
  public works = [
    {
      src: 'webmasters.png',
      alt: 'webmasters',
      title: 'Веб-студия "WebMasters" (2017 — 2018)',
      subtitle: 'Интернет-стажёр',
      description: 'Первый опыт в профессиональной разработке, участие в создании и поддержке различных проектов.'
    },
    {
      src: 'tech_venture.png',
      alt: 'tech_venture',
      title: 'Стартап "TechVenture" (2018 — 2019)',
      subtitle: 'Фронтенд-разработчик',
      description: 'Разработка пользовательского интерфейса для платформы e-learning, работа с REST API и веб-стандартами.'
    },
    {
      src: 'creative_agency.png',
      alt: 'creative_agency',
      title: 'ООО "CreativeAgency" (2019 — 2022)',
      subtitle: 'Веб-разработчик',
      description: 'Создание корпоративных сайтов и веб-приложений на React и Vue.js, оптимизация производительности, работа с клиентами и сбор требований.'
    }
  ];
}
