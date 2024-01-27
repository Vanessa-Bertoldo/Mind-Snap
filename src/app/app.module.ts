import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateThoughtComponent } from './component/thought/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './component/thought/list-thought/list-thought.component';
import { ThoughtComponent } from './component/thought/thought/thought.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './component/thought/delete-thought/delete-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    DeleteThoughtComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //Importante para as requisições funcionarem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
