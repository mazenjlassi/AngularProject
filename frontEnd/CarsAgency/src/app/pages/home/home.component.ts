import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('backgroundVideo', { static: true }) backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.backgroundVideo.nativeElement;

    video.muted = true;        // Just to be sure
    video.loop = true;         // Just to be sure
    video.play().catch(error => {
      console.error('Video play failed:', error);
    });
  }
}
