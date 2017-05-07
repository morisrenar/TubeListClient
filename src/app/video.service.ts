import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Video} from "./video";

@Injectable()
export class VideoService {

  private _getUrl = 'https://young-dusk-91163.herokuapp.com/api/videos';
  private _postUrl = 'https://young-dusk-91163.herokuapp.com/api/video';
  private _putUrl = 'https://young-dusk-91163.herokuapp.com/api/video/';
  private _deleteUrl = 'https://young-dusk-91163.herokuapp.com/api/video/';

  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVideo(video: Video) {
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  updateVideo(video: Video) {
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  deleteVideo(video: Video) {
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    return this._http.delete(this._deleteUrl + video._id)
      .map((response: Response) => response.json());
  }

}
