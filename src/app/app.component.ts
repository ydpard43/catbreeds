import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await SplashScreen.hide();

    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}