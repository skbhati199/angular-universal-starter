import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SharedTranslateService, ITranslateLanguage } from '@shared/shared-translate';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public languages: Observable<ITranslateLanguage[]>;
  public currentLang: string;

  constructor(private _router: Router,
              private _sharedTranslateService: SharedTranslateService) {
  }

  ngOnInit() {
    this.languages = this._sharedTranslateService.getLanguages();
    this.currentLang = this._sharedTranslateService.getCurrentLang();
  }

  public changeLang(lang: string): void {
    this._router.navigate(['/', 'change-lang', lang]);
  }
}
