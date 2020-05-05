import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'media-lara',
  styleUrl: 'media-lara.css',
  shadow: true,
})
export class MediaLara {

  render() {
    return (
      <div>
        <img src="img1.jpg"></img>
      </div>
    );
  }

}
