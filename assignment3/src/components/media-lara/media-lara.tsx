import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'media-lara',
  styleUrl: 'media-lara.css',
  shadow: true,
})
export class MediaLara {

@Prop() image : Array<String> = ["cloths-jeans.jpg", "cloths-foto.jpg", "fashion-cloths.jpg"];


plusSlide(){

}  



  render() {
    return (
        <div class="container">
          <button  id="left">&#8249;</button>
          <button id="right" >&#8250;</button>
          <img src={getAssetPath(`/assets/${this.image[2]}`)}></img>
        </div>
      
    );
  }

}
