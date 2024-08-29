import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { LeftSidebarComponent } from './sharedComponents/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './sharedComponents/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    // SharedComponent,
    NavbarComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
