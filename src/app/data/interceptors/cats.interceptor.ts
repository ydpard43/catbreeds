import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export const catsInterceptor: HttpInterceptorFn = (req, next) => {
    const isCatApi = req.url.includes('thecatapi.com');

    const modifiedReq = isCatApi
        ? req.clone({
            setHeaders: {
                'x-api-key': environment.apiKey
            }
        })
        : req;

    return next(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                console.warn('❌ No autorizado (401)');
            } else if (error.status === 403) {
                console.warn('🚫 Prohibido (403)');
            }
            return throwError(() => error);
        })
    );
};