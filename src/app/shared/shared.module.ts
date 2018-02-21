import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedConfigModule } from './shared-config';
import { SharedMetaModule } from './shared-meta';

@NgModule({
  exports: [
    LayoutsModule,
    SharedConfigModule,
    SharedMetaModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
