import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css']
})
export class MusicControlComponent implements OnInit {

  url: string = '../../assets/audio/quantic.mp3'

  player = new Audio();

  @Input() set song(song: Song) {
    this.player.src = song.url;
    this.player.load();
  }

  constructor() { }

  ngOnInit(): void {
  }

  playMusic(): void {
    
    this.player.play();
  }

  pauseMusic(): void {
    this.player.pause();
  }

}
