import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-comment-modal',
  imports: [MatDialogContent, ReactiveFormsModule, MatIcon, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: 'add-comment-modal.html',
  styleUrl: 'add-comment-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VALIDATION, useClass: Validation }
  ]
})
export class AddCommentModal { 
  protected readonly dialogRef = inject(MatDialogRef);
  protected data = inject<{
    isDisabled: WritableSignal<boolean>,
    username: string
  }>(MAT_DIALOG_DATA);
  protected validation = inject(VALIDATION);

  protected addCommentForm = new FormGroup({
    name: new FormControl(this.data.username, 
      [Validators.required]
    ),
    text: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(25)
      ]
    ),
  });

  constructor() {
    this.validation.setForm(this.addCommentForm);
  }
  
  protected closeDialog() {
    this.dialogRef.close();
  }

  protected addComment(e: any) {
    e.preventDefault();

    this.addCommentForm.markAllAsTouched();
    if (!this.addCommentForm.valid) {
      return;
    }

    this.dialogRef.close(this.addCommentForm.value);
  }
}
