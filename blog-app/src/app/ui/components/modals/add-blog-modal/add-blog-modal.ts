import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'add-blog-modal',
  imports: [MatDialogContent, ReactiveFormsModule],
  templateUrl: 'add-blog-modal.html',
  styleUrl: 'add-blog-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBlogModal {
  protected readonly dialogRef = inject(MatDialogRef);
  protected addBlogForm = new FormGroup({
    title: new FormControl(null, 
      [
        Validators.required,
        Validators.minLength(25)
      ]
    ),
    text: new FormControl(null,
      [Validators.required]
    ),
  });

  protected param(name: string) {
    return this.addBlogForm.get(name);
  }

  protected closeDialog() {
    this.dialogRef.close();
  }

  protected addBlog(event: Event) {
    event.preventDefault();

    this.addBlogForm.markAllAsTouched();
    if (!this.addBlogForm.valid) {
      return;
    }

    this.dialogRef.close(this.addBlogForm.value);
  }
}
