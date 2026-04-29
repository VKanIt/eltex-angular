import { InjectionToken } from "@angular/core";
import { IValidation } from "./validation.interface";

export const VALIDATION = new InjectionToken<IValidation>('Сервис для валидации форм');