import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TransferHttpModule } from './../modules/transfer-http/transfer-http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from './pages/home/home';
import { ListPage } from './pages/list/list';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    TransferHttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(AppComponent)
  ],
  entryComponents: [AppComponent, HomePage,
    ListPage],
  providers: [
    CookieService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})

export class AppModule { }
