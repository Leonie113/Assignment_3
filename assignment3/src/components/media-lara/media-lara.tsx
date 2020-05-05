import { Component, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'media-lara',
  styleUrl: 'media-lara.css',
  shadow: true,
})
export class MediaLara {

  // @Prop() image : Array<String> = ["cloths-jeans.jpg", "cloths-foto.jpeg", "fashion-cloths.jpg"];
  @Prop() image : string = "cloths-jeans.jpg";
  


  render() {
    return (
      <div>
        <img src={getAssetPath(`./assets/${this.image}`)} />
        <button></button>
      </div>
    );
  }

}
