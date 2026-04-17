import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-statistic-blogs-modal',
  imports: [MatDialogContent],
  templateUrl: 'statistic-blogs-modal.html',
  styleUrl: 'statistic-blogs-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticBlogsModal { 
  readonly dialogRef = inject(MatDialogRef);
  data = inject<{count: number}>(MAT_DIALOG_DATA);
  
  closeDialog() {
    this.dialogRef.close();
  }
}
