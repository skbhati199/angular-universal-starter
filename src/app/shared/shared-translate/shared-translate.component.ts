import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedTranslateService } from './shared-translate.service';

@Component({
  selector: 'app-change-language',
  template: ''
})
export class SharedTranslateComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute,
              private readonly _router: Router,
              private readonly _sharedTranslateService: SharedTranslateService) {
  }

  ngOnInit() {
    this._changeLang();
  }

  private _changeLang(): void {
    this._route.params.subscribe((params: { langCode: string }) => {
      this._sharedTranslateService.changeLang(params.langCode);
      this._router.navigate(['']);
    });
  }
}
