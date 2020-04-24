//Serch-Component (Leonie Müller)

import { Component, Prop} from '@stencil/core';

@Component({
    tag: 'textslide-leonie',
    styleUrl: 'textSlide-leonie.css'
})

export class TextSlideLeonie{
    
  @Prop() img1 = "fashion1.png";
  @Prop() img2 = "fashion2.jpg";

  @Prop() slides: Array<any> = [
    {
      imageUrl: `../assets/${this.img1}`
    },
    {
      imageUrl: `../assets/${this.img2}`
    },

  ]
      render() {
        return
      }
    }
   