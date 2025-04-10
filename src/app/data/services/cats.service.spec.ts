import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CatsService } from './cats.service';
import { Cats } from '../../core/models/cats.model';

describe('CatsService', () => {
  let service: CatsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CatsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all cats when no filter is provided', () => {
    service.getCats().subscribe((data: Cats[]) => {
      expect(data).toEqual([]);
    });
    const req = httpMock.expectOne('https://api.thecatapi.com/v1/breeds');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should fetch filtered cats when a filter is provided', () => {
    const filter = 'siamese';
    service.getCats(filter).subscribe((data: Cats[]) => {
      expect(data).toEqual([]);
    });
    const req = httpMock.expectOne(`https://api.thecatapi.com/v1/breeds/search?q=${filter}`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
