import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { Cats } from 'src/app/core/models/cats.model';
import { BreedDetailsPage } from './breed-details.page';

@Injectable({ providedIn: 'root' })
export class ShowCatDetailsModal {

  constructor(private modalController: ModalController) {}

  async present(cat: Cats): Promise<void> {
    const modal = await this.modalController.create({
      component: BreedDetailsPage,
      componentProps: { cat },
      cssClass: 'modal-full-screen'
    });
    await modal.present();
  }

  closeModal(){
    this.modalController.dismiss()
  }
}