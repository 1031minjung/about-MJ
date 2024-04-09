import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { KeyWordComponent } from './key-word/key-word.component';
import { LinksComponent } from './links/links.component';
import { AppService } from './app.service';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    KeyWordComponent,
    LinksComponent,
    EmailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-5N4FL2PCPL')
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
