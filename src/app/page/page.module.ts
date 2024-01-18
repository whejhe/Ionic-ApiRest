import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { RegistroPage } from './registro/registro.page';

@NgModule({
  declarations: [
    HomePage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class AppModule {}
