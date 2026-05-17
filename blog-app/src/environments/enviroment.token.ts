import { InjectionToken } from "@angular/core";
import { IEnviroment } from "./enviroment.interface";

export const ENV_CONF = new InjectionToken<IEnviroment>('Параметры текущей конфигурации');