import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';
import { MatIcon } from "@angular/material/icon";
import { TypeFileValidator } from '../../../../custom-validators/type-file-validator.directive';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { Category } from '../../../../types/Category';
import { AsyncPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { ENV_CONF } from '../../../../../environments/enviroment.token';

@Component({
  selector: 'put-blog-modal',
  imports: [MatDialogContent, ReactiveFormsModule, MatIcon, MatInput, MatFormFieldModule, MatAutocompleteModule, MatLabel, AsyncPipe],
  templateUrl: 'put-blog-modal.html',
  styleUrl: 'put-blog-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VALIDATION, useClass: Validation },
  ]
})
export class PutBlogModal {
  //-----INJECTS-----\\
  protected readonly dialogRef = inject(MatDialogRef);
  protected data = inject<{
    title: string|undefined,
    text: string|undefined,
    image: string|undefined,
    categoryId: Category|string|undefined
    isEdit: boolean,
    isDisabled: WritableSignal<boolean>,
    categories: WritableSignal<Category[]>
  }>(MAT_DIALOG_DATA);
  protected validation = inject(VALIDATION);
  protected enviroment = inject(ENV_CONF);
  
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
    image: new FormControl(null, [TypeFileValidator(['jpg', 'jpeg', 'png'])]),
    category: new FormControl<string | Category>('')
  });

  protected filteredOptions: Observable<Category[]>;

  protected imageUrl = signal<string|null>(this.data.image??null);

  //-----METHODS-----\\
  constructor() {
    this.filteredOptions = this.putBlogForm.controls['category'].valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.data.categories();
      }),
    );

    this.putBlogForm.controls['category'].setValue(this.data.categories().find((item) => item.id === this.data.categoryId) ?? '');
    this.validation.setForm(this.putBlogForm);
  }

  displayFn(category: Category): string {
    return category && category.name ? category.name : '';
  }

  private _filter(name: string): Category[] {
    const filterValue = name.toLowerCase();

    return this.data.categories().filter(option => option.name.toLowerCase().includes(filterValue));
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

  protected loadFile(e: any) {
    const file = e.target.files[0];

    this.putBlogForm.controls['image'].setValue(file);
    this.putBlogForm.controls['image'].markAllAsTouched();

    this.imageUrl.set(URL.createObjectURL(file));
  }

  protected deleteFile() {
    this.putBlogForm.controls['image'].setValue(null);
    this.imageUrl.set(null);
  }
}
