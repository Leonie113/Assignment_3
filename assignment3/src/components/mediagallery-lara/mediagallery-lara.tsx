import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'mediagallery-lara',
  styleUrl: 'mediagallery-lara.css',
  shadow: true,
})
export class MediagalleryLara {

  @Prop() image : Array<String> = ["cloths-jeans.jpg", "bags-store.jpg", "fashion-cloths.jpg"];
  @Prop() imageNumber : number = 0;

  plusSlide(n:number): void{
    this.slides(this.imageNumber += n);
  }

  slides(n:number)/*: number*/{
      if (n > this.image.length-1){ 
          this.imageNumber = 0;
      }
      if (n < 1){
          this.imageNumber = this.image.length-1; 
      }
  }


  render() {
    return (
        <div class="container">
          <button onClick={ () => this.plusSlide(+1)} id="right" >&#8250;</button>
          <button onClick={ () => this.plusSlide(-1)} id="left">&#8249;</button>
          <img src={getAssetPath(`/assets/${this.image[this.imageNumber]}`)}></img>
        </div>
      
    );
  }
}
