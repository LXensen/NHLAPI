import { AppConfigService } from './shared/services/app-config.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsHelper } from './shared/teams-helper';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

export function appInit(configSvc: AppConfigService) {
  return () => configSvc.Init();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModalModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TeamsHelper,
              AppConfigService,
              {
                provide: APP_INITIALIZER,
                useFactory: appInit,
                multi: true,
                deps: [AppConfigService]
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
