import { Component, Host, h, Prop, } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})
export class PopupLara {

 @Prop() visible: boolean;

 getVisiblity():string{
  return this.visible ? "invisible" : "";
 }

  render() {
    return (
      <Host>
        <div class={this.getVisiblity()}>
          <button> &times; </button>
          <h1>Herzlich Willkommen</h1> 
          <slot>
          
          </slot>
          <input type="email" placeholder="Gib deine Email ein"></input>
          <button class="button-registieren">ANMELDEN</button>
        </div>
      </Host>
    );
  }

}
