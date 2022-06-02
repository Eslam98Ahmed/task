import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig={
  apiKey:"AIzaSyCYCRSPByfE X201SVDc@z_MQ10JVKYZvM",
  authDomain:"dailycheck-d9983.firebaseapp.com",
  databaseURL:"https://dailycheck-d9983-default-rtdb.europe-west1.firebasedatabase.app",
  projectid:"dailycheck-d9983",
  storageBucket:"dailycheck-d9983.appspot.com",
  messagingSenderId:"594584322163",
  appId:"1:594584322163:web:acff93d09af6338faaaa06",
  measurementId:"G-PB9RFL53XQ" ,
  measuementId:"https://dailycheck-d9983-default-rtdb.europe-westl.firebasedatabase.app"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    AngularFireModule.initializeApp(firebaseConfig) ,
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
