import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCoolFeatureComponent } from './my-cool-feature/my-cool-feature.component';
import { FeatureToggleDirective } from './feature-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCoolFeatureComponent,
    FeatureToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
