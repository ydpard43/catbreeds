import { Component, Input } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Cats } from 'src/app/core/models/cats.model';
import { CatScoreComponent } from 'src/app/presentation/components/cat-score/cat-score.component';
import { IonCard, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { ShowCatDetailsModal } from './show-cat-details.modal';
import { linkDetails, textDetails, traits } from '../../../constants/cat-details.constants';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.page.html',
  styleUrls: ['./breed-details.page.scss'],
  standalone: true,
  imports: [NgFor, IonTitle, IonCard, IonToolbar, IonButtons, IonBackButton, IonCardSubtitle, IonContent, IonHeader, CatScoreComponent, IonCardContent],
})
export class BreedDetailsPage {

  traits = traits;
  textDetails = textDetails;
  linkDetails = linkDetails;

  constructor(private showCatDetailsModal: ShowCatDetailsModal) { }

  @Input() cat!: Cats

  closeModal() {
    this.showCatDetailsModal.closeModal()
  }

}
