import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  imports: [],
  templateUrl: 'hobby.html',
  styleUrl: 'hobby.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hobby {
  //-----INPUTS-----\\
  public title = input<string>('');
  public description = input<string>('');
  public src = input<string>('');
  public alt = input<string>('');
}
