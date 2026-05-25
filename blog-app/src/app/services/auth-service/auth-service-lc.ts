import { Injectable, signal } from "@angular/core";
import { IAuthService } from "./auth-service.interface";
import { User } from "../../types/User";
import { Observable } from "rxjs";
import { UserLc } from "../../types/UserLc";

@Injectable()
export class AuthServiceLc implements IAuthService {
    public isDisabled = signal<boolean>(false);
    public client = signal<User>({
        id: null,
        username: null,
        email: null,
        role: null
    });

    public getClient(): Observable<boolean> {
        return new Observable((subscriber) => {
            const data = localStorage.getItem('client_id');
            if (data === null || data === '') {
                return;
            }

            let clients: UserLc[] = [];
            const res = localStorage.getItem('clients');
            if (res !== null && res !== '') {
                clients = JSON.parse(res);
            }
            const client = clients.find((item: UserLc) => item.id === data);
            if (client !== undefined) {
                this.client.set(client);
            }

            subscriber.next(true);
        });
    }

    public login(login: string, password: string): Observable<string> {
        return new Observable<string>((subscriber) => {
            this.isDisabled.set(true);

            setTimeout(() => {
                const data = localStorage.getItem('clients');
                let clients: UserLc[] = [];
                if (data !== null && data !== '') {
                    clients = JSON.parse(data);
                }
                const client = clients.find((item: UserLc) => item.username === login && item.password === password);

                if (client === undefined) {
                    subscriber.error({
                        error: {
                            message: 'Неверный логин или пароль'
                        }
                    });
                    this.isDisabled.set(false);
                    return;
                }

                this.client.set({
                    id: client.id,
                    username: client.username,
                    email: client.email,
                    role: client.role
                });
                localStorage.setItem('client_id', client.id??'');
                
                subscriber.next('Успешный вход');
                this.isDisabled.set(false);
            }, 1000);
        })
    }

    public register(login: string, password: string, email: string): Observable<string> {
        return new Observable((subscriber) => {
            this.isDisabled.set(true);

            setTimeout(() => {
                const data = localStorage.getItem('clients');
                let clients = [];
                if (data !== null && data !== '') {
                    clients = JSON.parse(data);
                }

                const newId = crypto.randomUUID();
                clients.push({
                    id: newId,
                    username: login,
                    email: email,
                    role: 'admin',
                    password: password
                });

                localStorage.setItem('clients', JSON.stringify(clients));
                localStorage.setItem('client_id', newId);

                this.client.set({
                    id: newId,
                    username: login,
                    email: email,
                    role: 'admin',
                });

                subscriber.next('Пользователь успешно зарегистрирован');   
                this.isDisabled.set(false);
            }, 1000); 
        })
    }

    public logout(): Observable<string> {
        return new Observable((subscriber) => {
            this.isDisabled.set(true);

            setTimeout(() => {
                localStorage.removeItem('client_id');
                this.client.set({
                    id: null,
                    username: null,
                    email: null,
                    role: null
                });

                subscriber.next('Успешный выход');
                 this.isDisabled.set(false);
            }, 1000);
        });
    }

    public refreshToken(): Observable<string> {
        return new Observable((subscriber) => {
            subscriber.next('');
        });
    }
}