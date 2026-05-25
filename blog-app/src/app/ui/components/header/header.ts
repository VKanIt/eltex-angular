import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthModal } from '../modals/auth-modal/auth-modal';
import { AUTH_SERVICE } from '../../../services/auth-service/auth-service.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from "@angular/material/icon";
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIcon, MatButton],
  templateUrl: 'header.html',
  styleUrl: 'header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header { 
  private readonly dialog = inject(MatDialog);
  private authService = inject(AUTH_SERVICE);
  private destroyRef = inject(DestroyRef);
  private snackBar = inject(MatSnackBar);

  protected client = this.authService.client;
  protected isShowLogout = signal<boolean>(false);

  protected openAuthModal() {
    const dialogRef = this.dialog.open(AuthModal, {
      data: {
        isDisabled: this.authService.isDisabled,
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }
        
        this.isShowLogout.set(false);
        if (result.isRegister) {
          this.authService.register(result.form.login, result.form.password, result.form.email)
            .pipe(
              takeUntilDestroyed(this.destroyRef),
              catchError((resp: any) => {
                this.snackBar.open(resp.error.message);
                this.authService.isDisabled.set(false);
                return EMPTY;
              })
            )
            .subscribe((message: string) => {
              this.login(result);
              this.snackBar.open(message);
            });
        } else {
          this.login(result, true);
        }

      });
  }

  private login(result: {form: {login: string, password: string}}, isMessage: boolean = false): void {
    this.authService.login(result.form.login, result.form.password)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((resp: any) => {
          this.authService.isDisabled.set(false);
          this.snackBar.open(resp.error.message);
          return EMPTY;
        })
      )
      .subscribe((message: string) => {
        if (isMessage) {
          this.snackBar.open(message);
        }
      });
  }

  protected logout(): void {
    this.authService.logout()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((message: string) => {
        this.snackBar.open(message);
      });
  }
}
