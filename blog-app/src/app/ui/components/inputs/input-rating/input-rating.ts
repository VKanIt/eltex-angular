import { ChangeDetectionStrategy, Component, computed, EventEmitter, inject, input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-input-rating',
  imports: [MatIcon, FormsModule, ReactiveFormsModule, MatIconButton],
  templateUrl: 'input-rating.html',
  styleUrl: 'input-rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VALIDATION, useClass: Validation }
  ]
})
export class InputRating {
  protected validation = inject(VALIDATION);
  public isDisabled = input<boolean>(false);
  public initRating = input<number>(0);

  public ratingFormControl = computed(() => {
    const tmp = new FormControl({value: this.initRating(), disabled: true},
      [
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/),
        Validators.max(5),
        Validators.min(0)
      ],
    );

    this.validation.setForm(new FormGroup({
      rating: tmp
    }));

    return tmp;
  });

  @Output() edit: EventEmitter<any> = new EventEmitter();

  protected editRating() {
    if (this.ratingFormControl().disabled) {
      this.ratingFormControl().enable();

      return;
    }

    const newRating = Number(this.ratingFormControl().value);
    if (this.initRating() === newRating) {
      this.ratingFormControl().disable();
      return;
    }

    this.ratingFormControl().markAllAsTouched();
    if (!this.ratingFormControl().valid) {
      return;
    }
    
    this.edit.emit(newRating);
  }
}
