import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Componentes externos
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private _translate: TranslateService) {
    this.initializeApp();

    // Valida el navegador y asigna el idioma de acuerdo al lenguaje del mismo
    let idiomaUsuario = navigator.language.split('-')[0];
    idiomaUsuario = /(en|de|it|fr|es|be)/gi.test(idiomaUsuario) ? idiomaUsuario : 'en';
    this._translate.use(idiomaUsuario);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'INICIO', component: HomePage },
      { title: 'LISTA', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
