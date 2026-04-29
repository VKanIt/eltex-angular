import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hobby } from "../hobby/hobby";

@Component({
  selector: 'app-hobbies',
  imports: [Hobby],
  templateUrl: 'hobbies.html',
  styleUrl: 'hobbies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hobbies {
  //-----VARIABLES-----\\
  protected hobbies = [
    {
      src: './assets/images/hobbies/hobby_1.png',
      title: 'Платформа УП',
      description: 'Разработал платформу для управления проектами, которой пользуются более 500 компаний'
    },
    {
      src: './assets/images/hobbies/hobby_2.png',
      title: 'Платформа УП',
      description: 'Разработал платформу для управления проектами, которой пользуются более 500 компаний'
    },
    {
      src: './assets/images/blogs/image_blog.png',
      title: 'Платформа УП',
      description: 'Разработал платформу для управления проектами, которой пользуются более 500 компаний'
    },
    {
      src: './assets/images/blogs/image_blog.png',
      title: 'Платформа УП',
      description: 'Разработал платформу для управления проектами, которой пользуются более 500 компаний'
    }
  ];
}
