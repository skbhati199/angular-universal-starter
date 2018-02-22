import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

const fs = require('fs');

export class SharedTranslateServerLoaderService implements TranslateLoader {
  constructor(private _prefix: string = 'i18n',
              private _suffix: string = '.json',
              private _transferState: TransferState) {
  }

  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      const jsonData = JSON.parse(fs.readFileSync(`${this._prefix}/${lang}${this._suffix}`, 'utf8'));
      const key: StateKey<number> = makeStateKey<number>(`transfer-translate-${lang}`);
      this._transferState.set(key, jsonData);
      observer.next(jsonData);
      observer.complete();
    });
  }
}
