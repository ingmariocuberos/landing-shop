import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  imports: [],
  templateUrl: './video-modal.html',
  styleUrl: './video-modal.css',
})
export class VideoModal {
  showTrailer = signal<boolean>(false);

  playTrailer() {
    this.showTrailer.set(true);
  }
}
