import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {NgPipesModule} from 'ngx-pipes';


import { DataService } from './services/data.service';
import { CloudcomparerComponent } from './components/cloudcomparer/cloudcomparer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AdviceComponent } from './components/advice/advice.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path:'cloudcompare', component:CloudcomparerComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    CloudcomparerComponent,
    HeaderComponent,
    BannerComponent,
    AdviceComponent,
    FooterComponent
  ],
  imports: [
    NgPipesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
