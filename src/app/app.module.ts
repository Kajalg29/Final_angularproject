import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import {FormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImgMagnifier } from 'ng-img-magnifier';

import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { NopageComponent } from './Components/nopage/nopage.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    SidebarComponent,
    UserlistComponent,
    AdduserComponent,
    UserdetailsComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ImgMagnifier,
  // AgmCoreModule.forRoot({apiKey:"AIzaSyBHApUCVwUMeU9bmIpth_9wEDPHJTGBUY0"}),
   GoogleMapsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
