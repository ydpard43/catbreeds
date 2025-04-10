import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-score.component.html',
  styleUrls: ['./cat-score.component.scss']
})
export class CatScoreComponent {
  @Input() score: number = 0;
}
