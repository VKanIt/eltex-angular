import { inject, Injectable, signal } from "@angular/core";
import { IWebsocket } from "./websocket.interface";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ENV_CONF } from "../../../environments/enviroment.token";
import { MessageGetDto } from "../../dto/websocket/message.get.dto";
import { BlogCardStore } from "../blog-card-store/blog-card-store";
import { Observable } from "rxjs";

@Injectable()
export class Websocket implements IWebsocket {
    //-----INJECTS-----\\
    private enviroment = inject(ENV_CONF);

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

        this.socket.subscribe({
            next: (msg: MessageGetDto) => msg,
            error: (err) => console.error(err),
            complete: () => console.log('complete')
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
}