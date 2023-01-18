import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { GreetingsPageComponent } from './pages/greetings-page/greetings-page.component';
import { MessageBoxComponent } from './containers/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    GreetingsPageComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
