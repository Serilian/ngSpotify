import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchStr: string;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }
  searchMusic() {
    this.spotifyService.getToken().subscribe(
      (data) => {
        this.spotifyService.searchMusic(this.searchStr, 'artist', data.access_token).subscribe(
          (res) => {
            console.log(res.artists.items);
          });
      }
    );
  }
}
