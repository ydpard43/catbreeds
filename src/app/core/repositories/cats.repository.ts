import { Observable } from 'rxjs';
import { Cats } from '../models/cats.model';

export abstract class CatsRepository {
  abstract getCats(filter?: string): Observable<Cats[]>;
}