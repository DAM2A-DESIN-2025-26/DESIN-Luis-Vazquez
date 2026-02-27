import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  styleUrls: ['./idioma.page.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule]
})
export class IdiomaPage {

  constructor(private translate: TranslateService) {}

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }
}
