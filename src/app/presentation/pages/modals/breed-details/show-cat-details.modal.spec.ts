import { TestBed, inject } from '@angular/core/testing';
import { ShowCatDetailsModal } from './show-cat-details.modal';
import { BreedDetailsPage } from './breed-details.page';
import { catMock } from '../../../mocks/cat.mock';
import { ModalController } from '@ionic/angular/standalone';

describe('ShowCatDetailsModal', () => {
  let modalControllerSpy: jasmine.SpyObj<ModalController>;

  beforeEach(() => {
    modalControllerSpy = jasmine.createSpyObj('ModalController', ['create', 'dismiss']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ModalController,
          useValue: modalControllerSpy
        }
      ]
    });
  });

  it('should be created', inject([ShowCatDetailsModal], (service: ShowCatDetailsModal) => {
    expect(service).toBeTruthy();
  }));

  it('should call create and present modal', inject([ShowCatDetailsModal], async (service: ShowCatDetailsModal) => {
    const cat = catMock;
    const modalSpy = jasmine.createSpyObj('HTMLIonModalElement', ['present']);
    modalControllerSpy.create.and.returnValue(Promise.resolve(modalSpy));
    await service.present(cat);
    expect(modalControllerSpy.create).toHaveBeenCalledWith({
      component: BreedDetailsPage,
      componentProps: { cat },
      cssClass: 'modal-full-screen'
    });
    expect(modalSpy.present).toHaveBeenCalled();
  }));

  it('should call dismiss on ModalController', inject([ShowCatDetailsModal], (service: ShowCatDetailsModal) => {
    service.closeModal()
    expect(modalControllerSpy.dismiss).toHaveBeenCalled();
  }));
});
