import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Artist} from '../artist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  ngOnInit() {
  }
  searchMusic() {
    this.spotifyService.getToken().subscribe(
      (data) => {
        this.spotifyService.searchMusic(this.searchStr, 'artist', data.access_token).subscribe(
          (res) => {
            this.searchRes = res.artists.items;
          });
      }
    );
  }
}
