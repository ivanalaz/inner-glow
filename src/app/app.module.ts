import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';


@NgModule({
declarations: [
    // HeaderComponent,
    // HeroComponent,
    // FeaturesComponent,
    // TestimonialsComponent,
    // FooterComponent,
    // TestIconComponent
],
imports: [
    AppComponent,
    BrowserModule,
    MatIconModule,
    // AppRoutingModule ????
    // BrowserAnimationsModule
],
providers: [],
exports: [
    // HeaderComponent
],
//   bootstrap: [AppComponent]
})
export class AppModule { }
