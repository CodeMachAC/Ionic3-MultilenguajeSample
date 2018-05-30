import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Componentes externos que realizan peticiones
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private _translate: TranslateService
  ) {
  }

  /**
   * Cambia el idioma mediante el servicio de @ngx-translate.
   * @param idioma recibe idioma en formato de XX.
   */
  cambiaIdioma(idioma: string) {
    console.log(`Traduzco a: ${idioma}`);
    this._translate.use(idioma);
  }

}
