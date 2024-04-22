import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute){};

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(){
    if(this.buttonText === "Oh Snap!"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, un Snap!";
    }else if(this.buttonText === "Oops, un Snap!"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap!";
    }
  }
}
