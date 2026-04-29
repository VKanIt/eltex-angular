import { Injectable } from "@angular/core";
import { IValidation } from "./validation.interface";
import { FormGroup } from "@angular/forms";

@Injectable()

export class Validation implements IValidation {
    //-----VARIABLES-----\\
    private form: FormGroup = new FormGroup({});

    //-----METHODS-----\\
    public setForm(form: FormGroup) {
        this.form = form;
    }

    public isInvalid(controlName: string) : boolean
    {
        const control = this.form.get(controlName);

        return Boolean(control?.invalid && (control?.touched || control?.dirty));
    }

    public getErrorMessage(controlName: string, nameElement: string|null = null) : string
    {
        const control = this.form.get(controlName);
        const errors = control?.errors;

        let message = '';
         if (errors !== null && errors !== undefined) {
            Object.keys(errors).map((key) => {
                message = this.errorMessage(key, errors[key], nameElement);
            });
        }

        return message;
    }

    private errorMessage(errorKey: string, errorData: any, nameElement: string|null = null) {
        switch(errorKey) {
            case 'required':
                return 'Введите ' + (nameElement??'значение');
            
            case 'minlength':
                return `Нужно еще ${errorData.requiredLength - errorData.actualLength} символов`;
                
            default:
                return 'Ошибка при заполнении поля';
        }
    }
}