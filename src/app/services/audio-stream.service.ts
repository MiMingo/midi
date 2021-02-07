import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioStreamService {
  private ctx: AudioContext;
  private stream: MediaStream;
  private source: MediaStreamAudioSourceNode;
  private gain: GainNode;

  constructor() {
    this.init();
  }
  
  public async init(): Promise<void> {
    this.ctx = new AudioContext();
    this.gain = this.ctx.createGain();
    this.gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
  }
  
  public async start(): Promise<void> {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this.source = await this.ctx.createMediaStreamSource(this.stream);
    this.source.connect(this.gain);
    this.gain.connect(this.ctx.destination);
  }

  public async stop(): Promise<void> {
    this.gain?.disconnect(this.ctx.destination)
    this.source?.disconnect(this.gain);
    // this.source.mediaStream.getTracks().forEach(t => t.stop());
    this.stream?.getTracks().forEach(t => t.stop());
  }

  public set volume(value: number) {
    this.gain.gain.setValueAtTime(value, this.ctx.currentTime);
  }
  public get volume(): number {
    return this.gain.gain.value;
  }
}
