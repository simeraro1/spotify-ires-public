import { Component, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private spotifyService = inject(SpotifyService);

  public tracks$ = this.spotifyService.getTopTracks();

  public user$ = this.spotifyService.getUserInfo();
}
