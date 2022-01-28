import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any[] = [
        {
          "Id": 1,
          "PostDate": "December 15, 2021",
          "CTitle": "Lorem ipsum dolor sit amet, consetetur",
          "CText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…",          
          "imageUrl": "../../assets/Images/shutterstock_1686003652-2.png"
        },
        {
          "Id": 2,
          "PostDate": "December 15, 2021",
          "CTitle": "Lorem ipsum dolor sit amet, consetetur",
          "CText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…",          
          "imageUrl": "../../assets/Images/shutterstock_1686003652-2.png"
        },{
          "Id": 3,
          "PostDate": "December 15, 2021",
          "CTitle": "Lorem ipsum dolor sit amet, consetetur",
          "CText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…",          
          "imageUrl": "../../assets/Images/shutterstock_1686003652-2.png"
        },
      ]; 


}
