import { NgModule } from '@angular/core';
import { ConfigLoader, ConfigModule, ConfigStaticLoader } from '@ngx-config/core';

export function configFactory(): ConfigLoader {
  return new ConfigStaticLoader({
    'system': {
      'appName': 'App Universal Starter',
      'appUrl': 'http://ssr.angular.su'
    },
    'meta': {
      'defaultPageTitle': 'Default title App Universal',
      'defaultMetaDescription': 'Default description',
      'pageTitleSeparator': ' | ',
      'pageTitlePositioning': 10
    },
    'i18n': {
      'defaultLanguage': {
        'code': 'en',
        'name': 'English',
        'culture': 'en-US'
      },
      'availableLanguages': [
        {
          'code': 'en',
          'name': 'English',
          'culture': 'en-US'
        },
        {
          'code': 'ru',
          'name': 'русский',
          'culture': 'ru-RU'
        }
      ]
    }
  });
}

@NgModule({
  imports: [
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory)
    }),
  ]
})
export class SharedConfigModule {
}
