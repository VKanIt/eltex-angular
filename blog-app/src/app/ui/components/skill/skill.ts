import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: 'skill.html',
  styleUrl: 'skill.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skill {
  //-----INPUTS-----\\
  public title = input<string>('');
}
