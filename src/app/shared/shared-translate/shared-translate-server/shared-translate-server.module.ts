import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConfigService } from '@ngx-config/core';

import { SharedTranslateService } from '@shared/shared-translate/shared-translate.service';
import { SharedTranslateServerLoaderService } from './shared-translate-server-loader.service';

export function translateFactory(transferState: TransferState, config: ConfigService) {
  return new SharedTranslateServerLoaderService(
    config.getSettings('i18n.loader.server.prefix'),
    config.getSettings('i18n.loader.suffix'),
    transferState
  );
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState, ConfigService]
      }
    }),
  ],
  providers: [SharedTranslateService]
})
export class SharedTranslateServerModule {
}
