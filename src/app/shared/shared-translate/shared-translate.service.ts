import { Injectable, Inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable } from 'rxjs/Observable';

import { AppStorage } from 'forStorage/universal.inject';
import { ITranslateLanguage } from './shared-translate.interface';

const LANGUAGES: ITranslateLanguage[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];
const LANG_LIST: string[] = ['en', 'ru'];
const DEFAULT_LANG: string = 'en';

@Injectable()
export class SharedTranslateService {
  constructor(private _translate: TranslateService,
              private _meta: MetaService,
              @Inject(AppStorage) private _appStorage: Storage) {
    this._translate.addLangs(LANG_LIST);
    this._translate.setDefaultLang(DEFAULT_LANG);
    this._translate.use(this._appStorage.getItem('lang') || DEFAULT_LANG);
  }

  public getLanguages(): Observable<ITranslateLanguage[]> {
    return Observable.of(LANGUAGES);
  }

  public getCurrentLang(): string {
    return this._translate.currentLang;
  }

  public changeLang(lang: string): void {
    this._translate.use(lang).subscribe(() => {
      this._appStorage.setItem('lang', lang);
      this._meta.setTag('og:locale', lang);
    });
  }
}
