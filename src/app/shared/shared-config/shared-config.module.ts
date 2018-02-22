import { NgModule, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigLoader, ConfigModule } from '@ngx-config/core';
import { ConfigFsLoader } from '@ngx-config/fs-loader';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { UniversalConfigLoader } from '@ngx-universal/config-loader';

const PATH_CONFIG_SERVER: string = './dist/assets/config/config.json';
const PATH_CONFIG_BROWSER: string = './assets/config/config.json';

export function configFactory(platformId: any, http: HttpClient): ConfigLoader {
  const serverLoader: ConfigLoader = new ConfigFsLoader(PATH_CONFIG_SERVER);
  const browserLoader: ConfigLoader = new ConfigHttpLoader(http, PATH_CONFIG_BROWSER);
  return new UniversalConfigLoader(platformId, serverLoader, browserLoader);
}

@NgModule({
  imports: [
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configFactory,
      deps: [PLATFORM_ID, HttpClient]
    }),
  ]
})
export class SharedConfigModule {
}
