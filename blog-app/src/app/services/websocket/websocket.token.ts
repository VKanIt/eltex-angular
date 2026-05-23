import { InjectionToken } from "@angular/core";
import { IWebsocket } from "./websocket.interface";

export const WEBSOCKET = new InjectionToken<IWebsocket>('Сервис для соединения по websocket');