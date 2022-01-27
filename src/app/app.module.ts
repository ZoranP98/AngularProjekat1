import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './heder/heder.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutOurServicesComponent } from './about-our-services/about-our-services.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    NavigationComponent,
    AboutOurServicesComponent,
    NewsCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
