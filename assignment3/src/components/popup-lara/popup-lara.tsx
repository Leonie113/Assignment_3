import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})
export class PopupLara {

 
 
 @Element() divElement: HTMLDivElement | any;

 setElement(){
    this.divElement = document.getElementsByTagName("div");
}

getElement(){
  return this.divElement;
}

invisible(el: HTMLElement): void {
  el.style.display="none"
}

  render() {
    return (
      <Host>
        <div>
          <img id="" src="/assets/newsletter.png" ></img>
          <button class="buttonx" onClick={() => this.invisible(this.getElement())}> &times; </button>
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
