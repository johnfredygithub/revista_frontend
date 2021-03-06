import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///import {ClientComponent} from './client/client.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { dialogeditorialComponent } from './home/dialog/dialogeditorial.component';
import {FormsModule} from '@angular/forms';
import { FormatWidth } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { DialogDeleteComponent } from './common/delete/dialogdelete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    dialogeditorialComponent,
    DialogDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
