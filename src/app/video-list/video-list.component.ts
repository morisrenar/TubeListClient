import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: any) {
    this.SelectVideo.emit(vid);
  }

}
