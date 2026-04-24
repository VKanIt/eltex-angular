import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-blog-modal',
  imports: [MatDialogContent, ReactiveFormsModule],
  templateUrl: 'edit-blog-modal.html',
  styleUrl: 'edit-blog-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBlogModal {
  protected readonly dialogRef = inject(MatDialogRef);
  private data = inject<{title: string, text: string}>(MAT_DIALOG_DATA);

  protected editBlogForm = new FormGroup({
    title: new FormControl(this.data.title, 
      [
        Validators.required,
        Validators.minLength(25)
      ]
    ),
    text: new FormControl(this.data.text,
      [Validators.required]
    ),
  });

  protected param(name: string) {
    return this.editBlogForm.get(name);
  }

  protected closeDialog() {
    this.dialogRef.close();
  }

  protected editBlog(event: Event) {
    event.preventDefault();

    this.editBlogForm.markAllAsTouched();
    if (!this.editBlogForm.valid) {
      return;
    }

    this.dialogRef.close(this.editBlogForm.value);
  }
}
