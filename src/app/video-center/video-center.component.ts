import { Component, OnInit } from '@angular/core';
import {Video} from "../video";
import {VideoService} from "../video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  SelectedVideo : Video;
  private hideNewVideo: boolean = true;

  videos: Array<Video>;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.SelectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.SelectedVideo);
  }

  onSubmitAddVideo(video: Video) {
    console.log("Adding video");
    this.hideNewVideo = true;
    this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          console.log("Added video: " + resNewVideo);
          this.videos.push(resNewVideo);
          this.SelectedVideo = resNewVideo;
        });
  }

  newVideoForm() {
    this.hideNewVideo = false;
    this.SelectedVideo = null;
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdateVideo => video = resUpdateVideo);
    this.SelectedVideo = null;
  }

  onDeleteVideoEvent(video: any) {
    var videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for(var index=0; index<videoArray.length; index++) {
          if(videoArray[index]._id === video._id) {
            videoArray.splice(index, 1);
          }
        }
      });
    this.SelectedVideo = null;
  }

}
