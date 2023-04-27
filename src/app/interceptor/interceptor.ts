import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { map} from "rxjs/operators";
import { AutenticaService } from "src/service/autentica.service";

@Injectable()

export class Interceptor implements HttpInterceptor{

    constructor(private autenticaService : AutenticaService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers;

        if(req.body){
            headers = new HttpHeaders(
                {
                    contentType : "false",
                    processData : "false",
                    Authorization : "Bearer" + this.autenticaService.ObterToken()
                }
            )
        }else{
            headers = new HttpHeaders()
            .append("accept", "aplication/json")
            .append("Content-Type", "aplication/json")
            .append("Authorization", "Bearer " + this.autenticaService.ObterToken())
        }

        let request = req.clone({headers})
        return next.handle(request).pipe(
            map((event) => 
            {
                return event;
            })
        )
    }

}