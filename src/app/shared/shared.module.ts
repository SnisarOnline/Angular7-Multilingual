import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule} from '@angular/material/checkbox'; // https://material.angular.io/components/checkbox/examples
import { MatButtonModule} from '@angular/material/button'; // https://material.angular.io/components/button/api
import { MatFormFieldModule} from '@angular/material/form-field'; // https://material.angular.io/components/form-field/api
import { MatInputModule} from '@angular/material/input'; // https://material.angular.io/components/input/api
import { MatCardModule} from '@angular/material/card'; // https://material.angular.io/components/card/api
import { MatListModule, MatDividerModule} from '@angular/material';
// https://material.angular.io/components/list/api
// https://material.angular.io/components/divider/api
import {TranslateModule} from '@ngx-translate/core'; // Незабываем добавлять в модуль
import {SwitchLanguageComponent} from './component/switch-language/switch-language.component'; // переключение языков

import { ApiService } from './services/_api.service';
import { EventService } from './services/_event.service';
import { LocalStorageService } from './services/_localStorage.service';
import { TodoServiceService } from './services/todo-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule, // Импортим "pipe" спомощю которого и производится поиск перевода в json файле.
    MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatListModule, MatDividerModule,
  ],
  declarations: [
    SwitchLanguageComponent
  ],
  exports: [ // Отправим в другие компоненты, где нужны подключения модулей
    TranslateModule, // Импортим "pipe" спомощю которого и производится поиск перевода в json файле.
    MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatListModule, MatDividerModule,
    SwitchLanguageComponent,
  ],
  entryComponents: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DecimalPipe,
        ApiService,
        EventService,
        LocalStorageService,
        TodoServiceService
      ],
    };
  }

}
