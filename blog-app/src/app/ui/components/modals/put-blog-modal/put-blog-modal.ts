import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'put-blog-modal',
  imports: [MatDialogContent, ReactiveFormsModule, MatIcon],
  templateUrl: 'put-blog-modal.html',
  styleUrl: 'put-blog-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VALIDATION, useClass: Validation }
  ]
})
export class PutBlogModal {
  //-----INJECTS-----\\
  protected readonly dialogRef = inject(MatDialogRef);
  protected data = inject<{
    title: string|undefined,
    text: string|undefined,
    isEdit: boolean,
    isDisabled: WritableSignal<boolean>
  }>(MAT_DIALOG_DATA);
  protected validation = inject(VALIDATION);
  
  //-----VARIABLES-----\\
  protected putBlogForm = new FormGroup({
    title: new FormControl(this.data.title ?? null, 
      [
        Validators.required,
        Validators.minLength(25)
      ],
    ),
    text: new FormControl(this.data.text ?? null,
      [Validators.required]
    ),
  });

  //-----METHODS-----\\
  constructor() {
    this.validation.setForm(this.putBlogForm);
  }

  protected closeDialog() {
    this.dialogRef.close();
  }

  protected putBlog(event: Event) {
    event.preventDefault();

    this.putBlogForm.markAllAsTouched();
    if (!this.putBlogForm.valid) {
      return;
    }

    this.dialogRef.close(this.putBlogForm.value);
  }
}
