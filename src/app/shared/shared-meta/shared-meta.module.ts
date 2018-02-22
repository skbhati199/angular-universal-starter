import { NgModule } from '@angular/core';

import { MetaLoader, MetaModule, MetaStaticLoader } from '@ngx-meta/core';
import { ConfigService } from '@ngx-config/core';
import { TranslateService } from '@ngx-translate/core';

export function metaFactory(config: ConfigService, translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: config.getSettings('meta.pageTitlePositioning'),
    pageTitleSeparator: config.getSettings('meta.pageTitleSeparator'),
    applicationName: config.getSettings('system.appName'),
    applicationUrl: config.getSettings('system.appUrl'),
    defaults: {
      title: config.getSettings('meta.defaultPageTitle'),
      description: config.getSettings('meta.defaultMetaDescription'),
      'og:site_name': config.getSettings('system.appName'),
      'og:type': 'website',
      'og:locale': config.getSettings('i18n.defaultLanguage.culture'),
      'og:locale:alternate': config.getSettings('i18n.availableLanguages').map((lang: any) => lang.culture).toString()
    }
  });
}

@NgModule({
  imports: [
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [ConfigService, TranslateService]
    }),
  ]
})
export class SharedMetaModule {
}
