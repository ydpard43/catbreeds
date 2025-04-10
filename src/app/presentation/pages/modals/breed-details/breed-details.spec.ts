import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedDetailsPage } from './breed-details.page';
import { ShowCatDetailsModal } from './show-cat-details.modal';
import { catMock } from '../../../mocks/cat.mock';

describe('BreedDetailsPage', () => {
  let component: BreedDetailsPage;
  let fixture: ComponentFixture<BreedDetailsPage>;
  let showCatDetailsModalSpy: jasmine.SpyObj<ShowCatDetailsModal>;

  beforeEach(async () => {
    showCatDetailsModalSpy = jasmine.createSpyObj('ShowCatDetailsModal', ['closeModal']);
    await TestBed.configureTestingModule({
      imports: [BreedDetailsPage],
      providers: [
        { provide: ShowCatDetailsModal, useValue: showCatDetailsModalSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsPage);
    component = fixture.componentInstance;
    component.cat = catMock;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call ShowCatDetailsModal.closeModal when closeModal is called', () => {
    component.closeModal();
    expect(showCatDetailsModalSpy.closeModal).toHaveBeenCalled();
  });

  it('should have traits, textDetails, and linkDetails defined', () => {
    expect(component.traits).toBeDefined();
    expect(component.textDetails).toBeDefined();
    expect(component.linkDetails).toBeDefined();
  });
});
