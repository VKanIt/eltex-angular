import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function TypeFileValidator(acceptTypes: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
        return null;
    }
    
    const typeFile = control.value.name.split('.')[1];

    return !acceptTypes.includes(typeFile) ? {errorTypeFile: { acceptTypes: acceptTypes }} : null;
  };
}