import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'add-blog-modal',
  imports: [MatDialogContent],
  templateUrl: 'add-blog-modal.html',
  styleUrl: 'add-blog-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBlogModal { 
  readonly dialogRef = inject(MatDialogRef);

  closeDialog() {
    this.dialogRef.close();
  }
}
