import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: 'work.html',
  styleUrl: 'work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work { 
  public title = input<string>('');
  public subtitle = input<string>('');
  public description = input<string>('');
  public src = input<string>('');
  public alt = input<string>('');
}
