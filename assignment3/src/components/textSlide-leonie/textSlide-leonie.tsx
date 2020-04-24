//text-img-Slide-Box (Leonie Müller)

import { Component, h, Prop, EventEmitter, Event, Listen, State} from '@stencil/core';

@Component({
    tag: 'textslide-leonie',
    styleUrl: 'textSlide-leonie.css'
})

export class TextSlideLeonie{
 @Prop() img1 = "fashion1.png";
 @Prop() img2 = "fashion2.jpg";

  @Prop() slides: Array<any> = [
    {
      imageUrl: '../assets/${this.img.1}'
    },
    {
      imageUrl: '../assets/${this.img2}'
    }
  ]

  @State()  = false;
  slide() {
    if(!this.slide)
  }

    render() {
        return 
      }
    }
   