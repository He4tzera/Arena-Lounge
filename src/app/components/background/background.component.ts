import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {


  imgLogo : string = "assets/Arenalogo1.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
