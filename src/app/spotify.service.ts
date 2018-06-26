import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  private searchUrl = '';
  private redirect_uri: string;
  client_id = 'b467511ca1414d5c890d346c5e3c34a4';
  client_secret = 'c77c82fc87594206ad12b7eee0337494';
  private access_token: string;
  private ArtistUrls: string;
  private AlbumsUrl: string;
  private AlbumUrl: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

  constructor(private http: HttpClient) {
    console.log('Spotify Service ready');
  }


  getToken() {
    let params = ('grant_type=client_credentials');
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + this.encoded);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('https://accounts.spotify.com/api/token', params, {headers: headers});

  }

  searchMusic(searchStr: string, type: string, token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + searchStr + '&offset=0&limit=20&type=' + type + '&market=PL';
    console.log(this.searchUrl);
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);

    return this.http.get(this.searchUrl, {headers: headers});
  }

}
