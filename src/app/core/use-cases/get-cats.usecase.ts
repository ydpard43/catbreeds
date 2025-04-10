import { Injectable } from '@angular/core';
import { CatsRepository } from '../repositories/cats.repository';
import { Cats } from '../models/cats.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCatsUseCase {
  constructor(private catsRepository: CatsRepository) {}

  execute(filter: string = ''): Observable<Cats[]> {
    return this.catsRepository.getCats(filter);
  }
}