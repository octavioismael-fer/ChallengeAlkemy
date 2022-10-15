import { Injectable } from '@angular/core';
//Import de HTTPCLIENT Y HTTPERRORRESPONSE
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Results } from '../models/platoscomida';
import { IPlato } from 'src/app/models/platoscomida';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatosComidaService {
  baseURL = environment.apiURL + '?apiKey=e9f160530b8e49a2b6f95a4f7c9faffe';

  constructor(private http: HttpClient) {}

  obtenerPlato(): Observable<any> {
    return this.http.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=e9f160530b8e49a2b6f95a4f7c9faffe'
    );
  }

  obtenerPlatoPorCantidad(numero: number): Observable<Results> {
    let opciones: HttpParams = new HttpParams().set('results', numero);

    return this.http.get<Results>(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=e9f160530b8e49a2b6f95a4f7c9faffe',
      { params: opciones }
    );
  }

  obtenerPlatoPorQuery(query: string): Observable<IPlato> {
    const url = this.baseURL + query;
    return this.http.get<IPlato>(url);
  }
}
