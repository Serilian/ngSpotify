import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Artist} from '../artist';
import {Album} from '../album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getToken()
          .subscribe(data => {
            this.spotifyService.getArtist(id, data.access_token).subscribe(artist => {
              this.artist = artist;
            });
            this.spotifyService.getAlbums(id, data.access_token)
              .subscribe(albums => this.albums = albums.items);
          });
      });

  }
}
