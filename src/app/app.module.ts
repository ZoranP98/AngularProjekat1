import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './heder/heder.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutOurServicesComponent } from './about-our-services/about-our-services.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

import { MainSecondPageComponent } from './AboutUsPage/main-second-page/main-second-page.component';
import { OurTeamComponent } from './AboutUsPage/our-team/our-team.component';
import { MainThirdPageComponent } from './OurServicesPage/main-third-page/main-third-page.component';
import { OurServiceComponent } from './OurServicesPage/our-service/our-service.component';
import { ServicesFooterComponent } from './OurServicesPage/services-footer/services-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    NavigationComponent,
    AboutOurServicesComponent,
    NewsCardComponent,
    FooterComponent,
    MainSecondPageComponent,
    OurTeamComponent,
    MainThirdPageComponent,
    OurServiceComponent,
    ServicesFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: HederComponent},
      {path: "", redirectTo: "../app/heder", pathMatch: "full"},

      {path: "AboutUsPage", component: MainSecondPageComponent},
      {path: "", redirectTo: "../app/AboutUsPage/main-second-page", pathMatch: "full"},

      {path: "OurServicesPage", component: MainThirdPageComponent},
      {path: "", redirectTo: "../app/OurServicesPage/MainThirdPageComponent", pathMatch: "full"}
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
