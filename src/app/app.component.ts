import { Component } from '@angular/core';
import { Song } from './song'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicLab';

  selectedSong!: Song;

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  


}
