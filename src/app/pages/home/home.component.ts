import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    image1: string = '../assets/Images/Photo_1.jpg';
    image2: string = '../assets/Images/Photo_2.jpg';
    image3: string = '../assets/Images/Photo_3.jpg';
    image4: string = '../assets/Images/Photo_4.jpg';
    image9: string = '../assets/Images/Photo_9.jpg';
    image11: string = '../assets/Images/Photo_11.jpg'
    image6: string = '../assets/Images/Photo_6 rotated.jpg'

    constructor() { }

  ngOnInit(): void {
  }

}
