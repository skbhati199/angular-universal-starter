import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TransferHttpModule } from './../modules/transfer-http/transfer-http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeIonicComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpModule,
    TransferHttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(AppComponent)
  ],
  entryComponents: [ HomeIonicComponent ],
  providers: [CookieService],
  bootstrap: [IonicApp]
})
export class AppModule { }
