import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GameCanvasModule} from './components/game-canvas/game-canvas.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameCanvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
