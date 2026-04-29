import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-first-page',
  imports: [],
  templateUrl: 'main-first-page.html',
  styleUrl: 'main-first-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainFirstPage { }
