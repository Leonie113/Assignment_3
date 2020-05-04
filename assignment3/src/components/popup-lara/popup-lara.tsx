import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})
export class PopupLara {

  render() {
    return (
      <Host>
        <div>
          <button> &times; </button>
          <slot></slot>
          <input></input>
        </div>
      </Host>
    );
  }

}
