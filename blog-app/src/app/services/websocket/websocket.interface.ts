import { WritableSignal } from "@angular/core";
import { Observable } from "rxjs";

export interface IWebsocket {
    isConnect: WritableSignal<boolean>

    subscribeArticle(id: number|string): void,
    getChanged(): Observable<any>|undefined
}