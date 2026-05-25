import type { HttpInterceptorFn } from '@angular/common/http';
import { AUTH_TOKEN_LC_KEY } from './auth.consts';

export const authServiceInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem(AUTH_TOKEN_LC_KEY);
  if (!accessToken) {
    return next(req);
  }

  const cloneReq = req.clone({
    withCredentials: true,
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    }
  })

  return next(cloneReq);
};
