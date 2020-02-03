import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrPushComponent } from './components/arr-push/arr-push.component';
import { CreateAttributeComponent } from './components/create-attribute/create-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrPushComponent,
    CreateAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'attribute',component:CreateAttributeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
