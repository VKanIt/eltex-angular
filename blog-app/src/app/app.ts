import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { Header } from "./ui/components/header/header";
import { Footer } from "./ui/components/footer/footer";
import { MatProgressBar } from '@angular/material/progress-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MatProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  isNavigating = signal(false);
  value = signal(0);

  constructor() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.value.set(0);
        this.isNavigating.set(true);
      }

      for (let i = 0; i <= 100; i++) {
        this.value.set(i);
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        this.value.set(100);
        this.isNavigating.set(false);
      }
    });
  }
}