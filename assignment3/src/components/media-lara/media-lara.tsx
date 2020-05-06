import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'media-lara',
  styleUrl: 'media-lara.css',
  shadow: true,
})
export class MediaLara {

  @Prop() image : Array<String> = ["cloths-jeans.jpg", "bags-store.jpg", "fashion-cloths.jpg"];
  @Prop() slideIndex: number = 1;
  @Prop() imageNumber : number = 0;

  plusSlide(n): void{
    this.slides(this.slideIndex += n);
    return n;
  }

  slides(n:number): number{
        // console.log(slides.length); --> 3 
      if (n > this.image.length){ // wenn es nach dem Durchlauf großer als 3 ist, wird es wieder auf 1 gesetzt
          this.slideIndex = 1;
      }
      if (n < 1){
          this.slideIndex = this.image.length; // man könnte hier auch einfach 3 schreiben (slides.length ist nur die schönere Variante), also wenn es kleiner ist als 1, dann beginne wieder von hinten
      }
       //zeigen (-1 muss man schreiben da Arrays mit null anfangen, also 1-1=0)
      this.imageNumber = this.slideIndex-1;
      return this.imageNumber;
  }


  render() {
    return (
        <div class="container">
          <button onClick={ () => this.plusSlide(-1)} id="left">&#8249;</button>
          <button onClick={ () => this.plusSlide(+1)} id="right" >&#8250;</button>
          <img src={getAssetPath(`/assets/${this.image[this.imageNumber]}`)}></img>
        </div>
      
    );
  }

}
