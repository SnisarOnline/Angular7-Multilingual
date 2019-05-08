import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    // прежде чем добавлять, нужено добавить файл "*.json" в "src/assets/i18n/" с етим именем, а потом добавить в доступные.
    translate.addLangs(['en', 'ru']); // Добавляем доступные языки

    // this language will be used as a fallback when a translation isn't found in the current language
    // этот язык будет использоваться в качестве запасного варианта, если перевод не найден на текущем языке
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang(); // Возвращает из браузера, кодовое название языка по умолчанию "DefaultLang"

    // авто смена языка для посетителя
    // если нет языка (в масиве доступных) то используется язык по умолчанию
    translate.use(translate.getLangs().join().match(browserLang) ? browserLang : 'en');
  }
}
