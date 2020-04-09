import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {TreeModule} from 'primeng/tree';
import {GMapModule} from 'primeng/gmap';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule}    from '@angular/forms'
import {InputMaskModule} from 'primeng/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputSwitchModule} from 'primeng/inputswitch';
import { UserService } from './user.service';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    TreeModule,
    GMapModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    InputMaskModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    ProgressBarModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
