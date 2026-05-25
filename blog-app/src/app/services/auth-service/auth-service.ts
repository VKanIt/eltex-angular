import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { IAuthService } from "./auth-service.interface";
import { User } from "../../types/User";
import { HttpClient } from "@angular/common/http";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { LoginResponsePostDto } from "../../dto/auth/login.response.post.dto";
import { AUTH_TOKEN_LC_KEY } from "./auth.consts";
import { RegisterResponsePostDto } from "../../dto/auth/register.response.post.dto";
import { LogoutResponsePostDto } from "../../dto/auth/logout.response.post.dto";
import { RefreshTokenResponsePostDto } from "../../dto/auth/refresh-token.response.post.dto";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService implements IAuthService {
    private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);
    private cookieService = inject(CookieService);
    
    public isDisabled = signal<boolean>(false);
    public client = signal<User>({
        id: null,
        username: null,
        email: null,
        role: null
    });

    public getClient(): Observable<boolean> {
        return this.httpClient.get<User>('/api/auth/me')
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                catchError(() => { 
                    return EMPTY; 
                }),
                map((resp) => {
                    this.client.set(resp);
                    return true;
                })
            )
    }

    public login(login: string, password: string): Observable<string> {
        this.isDisabled.set(true);

        return this.httpClient.post<LoginResponsePostDto>('/api/auth/login', {
            login, password
        }).pipe(
            takeUntilDestroyed(this.destroyRef),
            map((resp: LoginResponsePostDto) => {
                this.isDisabled.set(false);
                localStorage.setItem(AUTH_TOKEN_LC_KEY, resp.access_token);

                this.client.set({
                    id: resp.user.id,
                    username: resp.user.username,
                    email: resp.user.email,
                    role: resp.user.role
                });

                return 'Успешный вход';
            })
        );
    }

    public register(login: string, password: string, email: string): Observable<string> {
        this.isDisabled.set(true);

        return this.httpClient.post<RegisterResponsePostDto>('/api/users/register', {
            username: login, 
            password: password, 
            email: email
        }).pipe(
            takeUntilDestroyed(this.destroyRef),
            map((resp: RegisterResponsePostDto) => {                
                this.isDisabled.set(false);
                this.client.set({
                    id: resp.user.id,
                    username: resp.user.username,
                    email: resp.user.email,
                    role: resp.user.role
                });

                return resp.message;
            })
        );
    }

    public logout(): Observable<string> {
        return this.httpClient.post<LogoutResponsePostDto>('/api/auth/logout', {})
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: LogoutResponsePostDto) => {                
                    this.isDisabled.set(false);
                    localStorage.removeItem(AUTH_TOKEN_LC_KEY);
                    this.client.set({
                        id: null,
                        username: null,
                        email: null,
                        role: null
                    });

                    return resp.message;
                })
        )
    }

    public refreshToken(): Observable<string> {
        return this.httpClient.post<RefreshTokenResponsePostDto>('/api/auth/refresh', null)
             .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: RefreshTokenResponsePostDto) => {                
                    localStorage.setItem(AUTH_TOKEN_LC_KEY, resp.access_token);
                    return '';
                })
            )
    }
}