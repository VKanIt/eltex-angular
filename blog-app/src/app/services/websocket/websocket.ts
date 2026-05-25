import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { IWebsocket } from "./websocket.interface";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ENV_CONF } from "../../../environments/enviroment.token";
import { MessageGetDto } from "../../dto/websocket/message.get.dto";
import { Observable, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable()
export class Websocket implements IWebsocket {
    //-----INJECTS-----\\
    private enviroment = inject(ENV_CONF);
    private destroyRef = inject(DestroyRef);

    //-----SIGNALS-----\\
    public isConnect = signal<boolean>(false);

    //-----VARIABLES-----\\
    private socket: WebSocketSubject<any>|null;

    //-----METHODS-----\\
    constructor() {
        if (this.enviroment.websocketUrl === null) {
            this.socket = null;
            return;
        }

        this.isConnect.set(true);
        this.socket = webSocket(this.enviroment.websocketUrl);

        this.socket
            .pipe(
                tap((msg: MessageGetDto) => msg),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                error: (err) => console.error(err),
            });
    }

    public subscribeArticle(id: number|string): void {
        if (this.socket === null) {
            console.error('Отсутствует URL вебсокета');
            return;
        }

        this.socket.next({
            event:'subscribe-article',
            data: id
        });
    }

    public getChanged(): Observable<any>|undefined {
        return this.socket?.asObservable();
    }

    public unsubscribeArticle(): void {
        this.socket?.unsubscribe();
        this.socket?.complete();
    }
}