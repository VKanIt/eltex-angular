import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { Blog } from '../../../../types/Blog';
import { IBlogsRepository } from '../../../../services/blogs-repository/blogs-repository.interface';
import { IBlogsStore } from '../../../../services/blogs-store/blogs-store.interface';
import { VALIDATION } from '../../../../services/validation/validation.token';
import { Validation } from '../../../../services/validation/validation';

@Component({
  selector: 'put-blog-modal',
  imports: [MatDialogContent, ReactiveFormsModule],
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
    blogsRepository: IBlogsRepository,
    blogsStore: IBlogsStore
    title: string|undefined,
    text: string|undefined,
    isEdit: boolean,
    index: number|undefined
  }>(MAT_DIALOG_DATA);
  protected validation = inject(VALIDATION);
  
  //-----VARIABLES-----\\
  protected putBlogForm = new FormGroup({
    title: new FormControl(this.data.title??null, 
      [
        Validators.required,
        Validators.minLength(25)
      ],
    ),
    text: new FormControl(this.data.text??null,
      [Validators.required]
    ),
  });

  //-----METHODS-----\\
  constructor() {
    this.validation.setForm(this.putBlogForm);
  }

  protected param(name: string) {
    return this.putBlogForm.get(name);
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

    let observer;

    if (!this.data.isEdit) {
      observer = this.data.blogsRepository.addBlog({
          id: null,
          date: new Date(),
          title: this.putBlogForm.value.title??'',
          text: this.putBlogForm.value.text??'',
          image: null
      })
    } else {
      observer = this.data.blogsRepository.editBlog({
          title: this.putBlogForm.value.title??'',
          text: this.putBlogForm.value.text??'',
      }, this.data.index??1)
    }

    observer.subscribe((blogs: Blog[]) => {
      this.data.blogsStore.count++;
      this.data.blogsStore.updateBlogs(blogs.slice(0, this.data.blogsStore.limitActive));
      this.dialogRef.close();
    });
  }
}
