import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  @Output() eventSong = new EventEmitter<Song>();

  songs = SONGS;
  selectedSong?: Song;

  player = new Audio;

  constructor() { }
 

  ngOnInit(): void {

  }

  onSelect(song: Song): void {
    this.selectedSong = song;
    this.eventSong.emit(song);
  }


}
