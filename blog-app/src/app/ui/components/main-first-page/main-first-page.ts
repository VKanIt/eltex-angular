import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-main-first-page',
  imports: [MatIcon],
  templateUrl: 'main-first-page.html',
  styleUrl: 'main-first-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainFirstPage { }
