import { Component, OnInit } from '@angular/core';
import { AudioStreamService } from 'app/services/audio-stream.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  constructor(private stream: AudioStreamService) {}

  ngOnInit(): void {}

  public start(): void {
    this.stream.start();
  }

  public stop(): void {
    this.stream.stop();
  }

  public onVolumeChange(value: number) {
    this.stream.volume = value / 100;
  }

  public get volume(): number {
    return this.stream.volume * 100;
  }

}
