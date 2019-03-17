import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  constructor(private translate: TranslateService) {

    translate.addLangs(['en', 'ru']);

    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(translate.getLangs().join().match(browserLang) ? browserLang : 'en');
  }

}
