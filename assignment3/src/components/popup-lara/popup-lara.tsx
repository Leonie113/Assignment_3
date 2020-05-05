import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})
export class PopupLara {
 
 /** @Element() el: HTMLDivElement | any;
 invisible(): void {
  this.el = document.getElementsByTagName("div");
  this.el!.remove();
  console.log("hallo")
}**/ 



  render() {
    return (
      <Host>
        <div>
          <img id="" src="/assets/newsletter.png" ></img>
          <button class="buttonx" onClick={() => this.invisible()}> &times; </button>
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
