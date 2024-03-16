import {Component, Injectable, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounceOutUp, flash, heartBeat, jackInTheBox, rubberBand} from "ng-animate";



@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('bounceOutUp', [
      transition('* => void', useAnimation(bounceOutUp, )),

    ]),
    trigger('Company', [
      transition('void => *', useAnimation(jackInTheBox, {
          params: {
            timing:  4, delay: 0.1}
        }
      ))
    ]),
    trigger('mind', [
      transition('void => *', useAnimation(flash, {
          params: {
            timing:  4, delay: 0.1}
        }
      ))
    ]),
    trigger('Library', [
      transition('void => *', useAnimation(rubberBand, {
          params: {
            timing:  4, delay: 0.1}
        }
      ))
    ]),
    trigger('adventure', [
      transition('void => *', useAnimation(heartBeat, {
          params: {
            timing:  4, delay: 0.1}
        }
      ))
    ]),
  ]
})

export class MainComponent implements OnInit{
  visible = true;

  constructor() {
  }

  ngOnInit() {
  }
}
