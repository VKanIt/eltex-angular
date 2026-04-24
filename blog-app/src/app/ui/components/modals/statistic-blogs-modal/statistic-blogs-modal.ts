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
  protected readonly dialogRef = inject(MatDialogRef);
  protected data = inject<{count: number}>(MAT_DIALOG_DATA);
  
  protected closeDialog() {
    this.dialogRef.close();
  }
}
