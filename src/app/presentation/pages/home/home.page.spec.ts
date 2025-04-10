import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { GetCatsUseCase } from '../../../core/use-cases/get-cats.usecase';
import { of } from 'rxjs';
import { Cats } from 'src/app/core/models/cats.model';
import { ShowCatDetailsModal } from '../modals/breed-details/show-cat-details.modal';
import { catMock } from '../../mocks/cat.mock';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockGetCatsUseCase: jasmine.SpyObj<GetCatsUseCase>;
  let mockShowCatDetailsModal: jasmine.SpyObj<ShowCatDetailsModal>;

  beforeEach(async () => {
    mockGetCatsUseCase = jasmine.createSpyObj('GetCatsUseCase', ['execute']);
    mockShowCatDetailsModal = jasmine.createSpyObj('ShowCatDetailsModal', ['present']);

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        { provide: GetCatsUseCase, useValue: mockGetCatsUseCase },
        { provide: ShowCatDetailsModal, useValue: mockShowCatDetailsModal }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    mockGetCatsUseCase.execute.and.returnValue(of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call GetCatsUseCase and set cats on ngOnInit', () => {
    const fakeCats: Cats[] = [catMock as Cats];
    mockGetCatsUseCase.execute.and.returnValue(of(fakeCats));
    component.ngOnInit();
    expect(mockGetCatsUseCase.execute).toHaveBeenCalledWith('');
    expect(component.cats).toEqual(fakeCats);
  });

  it('should call ShowCatDetailsModal.present with the correct cat', () => {
    const cat: Cats = catMock as Cats;
    component.showDetails(cat);
    expect(mockShowCatDetailsModal.present).toHaveBeenCalledWith(cat);
  });
});
