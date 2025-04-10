import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader,IonButton,
  IonContent, IonIcon, IonCardContent, IonToolbar, IonTitle, IonButtons } from '@ionic/angular/standalone';
import { Cats } from '../../../core/models/cats.model';
import { FormsModule } from '@angular/forms';
import { CatScoreComponent } from 'src/app/presentation/components/cat-score/cat-score.component';
import { GetCatsUseCase } from '../../../core/use-cases/get-cats.usecase';
import { ShowCatDetailsModal } from '../modals/breed-details/show-cat-details.modal';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonTitle, IonToolbar, 
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, NgFor,
    IonContent, IonHeader, IonIcon, FormsModule, CatScoreComponent, IonCardContent, IonButton
  ]
})
export class HomePage implements OnInit {

  cats: Cats[] = [];
  filter: string = '';
  constructor(private getCatsUseCase: GetCatsUseCase, private showCatDetailsModal: ShowCatDetailsModal) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats() {
    this.getCatsUseCase.execute(this.filter).subscribe({
      next: (response) => {
        this.cats = response.filter((cat)=> cat?.image?.url);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  showDetails(cat: Cats) {
    this.showCatDetailsModal.present(cat);
  }
}