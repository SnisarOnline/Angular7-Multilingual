import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.styl']
})
export class SwitchLanguageComponent {

  allLanguage: string[];

  constructor(private translate: TranslateService) {
    this.allLanguage = translate.getLangs();
  }

  /**
   * Переключение языка
   * @param {string} language Выбранный язык пользователем.
   */
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
