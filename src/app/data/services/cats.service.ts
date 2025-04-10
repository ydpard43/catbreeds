import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cats } from '../../core/models/cats.model';
import { Observable } from 'rxjs';
import { CatsRepository } from 'src/app/core/repositories/cats.repository';

@Injectable({
  providedIn: 'root'
})
export class CatsService implements CatsRepository {
  private http = inject(HttpClient);

  getCats(filter: string = ''): Observable<Cats[]> {
    const endpoint = filter ? `/search?q=${filter}` : '';
    return this.http.get<Cats[]>(`https://api.thecatapi.com/v1/breeds${endpoint}`);
  }
}
