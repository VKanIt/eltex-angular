import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: 'header.html',
  styleUrl: 'header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header { }
