import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatScoreComponent } from './cat-score.component';
import { Component } from '@angular/core';

describe('CatScoreComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  @Component({
    selector: 'app-test-host',
    template: `<app-cat-score [score]="score"></app-cat-score>`,
    standalone: true,
    imports: [CatScoreComponent]
  })
  class TestHostComponent {
    score = 3;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CatScoreComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-cat-score')).toBeTruthy();
  });

  it('should render 5 stars always', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const stars = compiled.querySelectorAll('.stars span');
    expect(stars.length).toBe(5);
  });

  it('should apply the "filled" class according to the score', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const filledStars = compiled.querySelectorAll('.stars .filled');
    expect(filledStars.length).toBe(3);
  });

  it('should update filled stars when score changes', () => {
    hostComponent.score = 5;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const filledStars = compiled.querySelectorAll('.stars .filled');
    expect(filledStars.length).toBe(5);
  });

  it('should apply no filled stars when score is 0', () => {
    hostComponent.score = 0;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const filledStars = compiled.querySelectorAll('.stars .filled');
    expect(filledStars.length).toBe(0);
  });
});
