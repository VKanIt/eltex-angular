import { WritableSignal } from "@angular/core";
import { User } from "../../types/User";
import { Observable } from "rxjs";

export interface IAuthService {
    isDisabled: WritableSignal<boolean>
    client: WritableSignal<User>

    getClient(): Observable<boolean>
    login(login: string, password: string): Observable<string>
    register(login: string, password: string, email: string): Observable<string>
    logout(): Observable<string>
    refreshToken(): Observable<string>
}