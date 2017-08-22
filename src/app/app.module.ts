import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// New imports
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// Environment
import { environment } from '../environments/environment';
// AngularFire 2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Angular Material 2
import { MdButtonModule,
    MdChipsModule,
    MdCoreModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdSelectModule,
    MdTabsModule,
    MdToolbarModule,
    OverlayModule } from '@angular/material';
// External
import 'hammerjs';
// App Component
import { AppComponent } from './app.component';
// Routing
import { AppRouterModule } from './routing/app.routes';
// Components
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
// Temp
import { Link1Component } from './home/home.component';
import { Link2Component } from './home/home.component';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    // Temp
    Link1Component,
    Link2Component,
    FlexLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    // AngularFire 2
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // Angular Material 2
    MdButtonModule,
    MdChipsModule,
    MdCoreModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdSelectModule,
    MdTabsModule,
    MdToolbarModule,
    OverlayModule,
    RouterModule.forRoot(
      AppRouterModule,
      { enableTracing: false }
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
