import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skill } from '../skill/skill';

@Component({
  selector: 'app-skills',
  imports: [Skill],
  templateUrl: 'skills.html',
  styleUrl: 'skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  //-----VARIABLES------\\
  protected skills = ['Программирование', 'Инструменты', 'Методологии'];
}
