import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedConfigModule } from './shared-config';
import { SharedMetaModule } from './shared-meta';

import { SharedTranslateComponent } from './shared-translate/shared-translate.component';

@NgModule({
  exports: [
    LayoutsModule,
    SharedConfigModule,
    SharedMetaModule
  ],
  declarations: [SharedTranslateComponent],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
