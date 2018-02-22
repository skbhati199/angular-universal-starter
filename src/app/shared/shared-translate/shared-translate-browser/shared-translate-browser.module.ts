import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConfigService } from '@ngx-config/core';

import { SharedTranslateService } from '@shared/shared-translate/shared-translate.service';
import { SharedTranslateBrowserLoaderService } from './shared-translate-browser-loader.service';

export function translateStaticLoader(http: HttpClient, transferState: TransferState, config: ConfigService) {
  return new SharedTranslateBrowserLoaderService(
    config.getSettings('i18n.loader.browser.prefix'),
    config.getSettings('i18n.loader.suffix'),
    transferState,
    http
  );
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateStaticLoader,
          deps: [HttpClient, TransferState, ConfigService]
        }
      }
    ),
  ],
  providers: [SharedTranslateService]
})
export class SharedTranslateBrowserModule {
}
