import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'mediagallery-lara',
  styleUrl: 'mediagallery-lara.css',
  shadow: true,
})
export class MediagalleryLara implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
