import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';

@Component({
  selector: 'app-auth-modal',
  imports: [MatDialogContent, ReactiveFormsModule, MatIcon, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: 'auth-modal.html',
  styleUrl: 'auth-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VALIDATION, useClass: Validation }
  ]
})
export class AuthModal {
  private dialogRef = inject(MatDialogRef);
  protected data = inject<{
    isDisabled: WritableSignal<boolean>
  }>(MAT_DIALOG_DATA);
  protected validation = inject(VALIDATION);
  protected isRegister = signal<boolean>(false);

  protected authForm = new FormGroup({
    login: new FormControl(null, 
      [Validators.required]
    ),
    email: new FormControl(null,
      [
        Validators.required,
        Validators.email,
      ]
    ),
    password: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
  });

  constructor() {
    this.validation.setForm(this.authForm);
  }

  protected closeDialog() {
    this.dialogRef.close();
  }

  protected auth(e: any) {
    e.preventDefault();

    this.authForm.markAllAsTouched();
    if (!this.authForm.controls['login'].valid || !this.authForm.controls['password'].valid
      || (this.isRegister() && !this.authForm.controls['email'].valid)
    ) {
      return;
    }

    this.dialogRef.close({form: this.authForm.value, isRegister: this.isRegister()});
  }
}
