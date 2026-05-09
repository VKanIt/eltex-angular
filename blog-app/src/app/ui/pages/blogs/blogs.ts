import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [RouterOutlet],
  templateUrl: 'blogs.html',
  styleUrl: 'blogs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blogs { }
