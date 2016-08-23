import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment.dev';
import { AngularFireModule } from 'angularfire2';




// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBofqdUZR8WLKdPsqryQtF1lFxNAdk6JEI",
    authDomain: "vital-contact-116013.firebaseapp.com",
    databaseURL: "https://vital-contact-116013.firebaseio.com",
    storageBucket: "vital-contact-116013.appspot.com",
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class MyAppModule {}