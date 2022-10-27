import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css']
})
export class MusicControlComponent implements OnInit {

  audio = new Audio();

  constructor() { }
  progress = 0;  

  ngOnInit(): void {
  }

  @Input() set song(src: string) {
    this.audio.src = src;
    this.audio.load();
  }
  
  playSound() {

    this.audio.play();

      this.updateProgress();
    
  }
  pauseSound() {

    this.audio.pause();
  }
  stopSound() {

    this.audio.pause();
    this.audio.currentTime = 0;
  }

  updateProgress(){

  
    this.progress = (this.audio.currentTime/this.audio.duration*100 || 0) 
    setTimeout(() =>{
      this.updateProgress();
    },1000)
    

    console.log("Progreso:"+this.progress);
  }


  secondsToString (seconds: number): string {
    if (isNaN(seconds)) seconds = 0;

    let hour: string|number = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    let minute: string|number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second: string|number = Math.floor(seconds % 60);
    second = (second < 10) ? '0' + second : second;

    return `${hour}:${minute}:${second}`;
  }
}
