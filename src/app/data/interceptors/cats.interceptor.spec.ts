import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { catsInterceptor } from 'src/app/data/interceptors/cats.interceptor';

describe('catsInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
  const otherUrl = 'https://example.com/data';

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(
          withInterceptors([catsInterceptor])
        ),
        provideHttpClientTesting()
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add x-api-key header for requests to thecatapi.com', () => {
    http.get(catApiUrl).subscribe();
    const req = httpMock.expectOne(catApiUrl);
    expect(req.request.headers.get('x-api-key')).toBe(environment.apiKey);
    req.flush([]);
  });

  it('should not add x-api-key header for non-catapi URLs', () => {
    http.get(otherUrl).subscribe();
    const req = httpMock.expectOne(otherUrl);
    expect(req.request.headers.has('x-api-key')).toBeFalse();
    req.flush([]);
  });

  it('should log 401 warning', (done) => {
    spyOn(console, 'warn');
    http.get(catApiUrl).subscribe({
      next: () => fail('Expected request to fail with 401'),
      error: () => {
        expect(console.warn).toHaveBeenCalledWith('❌ No autorizado (401)');
        done();
      }
    });

    const req = httpMock.expectOne(catApiUrl);
    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
  });

  it('should log 403 warning', (done) => {
    spyOn(console, 'warn');
    http.get(catApiUrl).subscribe({
      next: () => fail('Expected request to fail with 403'),
      error: () => {
        expect(console.warn).toHaveBeenCalledWith('🚫 Prohibido (403)');
        done();
      }
    });

    const req = httpMock.expectOne(catApiUrl);
    req.flush('Forbidden', { status: 403, statusText: 'Forbidden' });
  });
});
