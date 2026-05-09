import { InjectionToken } from "@angular/core";
import { IStorageService } from "./storage-service.interface";

export const STORAGE_SERVICE = new InjectionToken<IStorageService>('Сервис для работы с localStorage');