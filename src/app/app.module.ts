import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { MusicControlComponent } from './music-control/music-control.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongDetailComponent,
    ListaCancionesComponent,
    MusicControlComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
