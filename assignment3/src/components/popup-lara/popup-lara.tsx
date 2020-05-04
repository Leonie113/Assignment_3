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
          <img id="" src="/assets/newsletter.png" ></img>
          <button class="buttonx"> &times; </button>
          <h1>Herzlich Willkommen</h1> 
          <span>
            <slot></slot>
          </span>
          <input type="email" placeholder="Gib deine Email ein"></input>
          <button class="button-registieren">ANMELDEN</button>
        </div>
      </Host>
    );
  }

}
