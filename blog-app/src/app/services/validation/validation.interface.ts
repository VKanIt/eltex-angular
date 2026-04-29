import { FormGroup } from "@angular/forms";

export interface IValidation {
    setForm(form: FormGroup) : void
    isInvalid(controlName: string) : boolean
    getErrorMessage(controlName: string, nameElement: string|null) : string
}