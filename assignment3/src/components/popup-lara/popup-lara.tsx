import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})
export class PopupLara {

 
 @Prop () inputwert: string;


 divElement!: HTMLDivElement;

invisible(el: HTMLElement): void {
  el.style.display="none"
}

inputChanged(event){
  console.log('input changed: ', event.target.value);
}


  render() {
    return (
      <Host>
        <div ref={(el) => this.divElement = el as HTMLDivElement}>
          <img id="" src="/assets/newsletter.png" ></img>
          <button class="buttonx" onClick={() => this.invisible(this.divElement)}> &times; </button>
          <h1>Herzlich Willkommen</h1> 
          <span>
            <slot></slot>
          </span>
          <input name="username" placeholder="Gib deine Email ein" required onChange={(event: UIEvent) => this.inputChanged(event)}></input>
          <button class="button-registieren">ANMELDEN</button>
        </div>
      </Host>
    );
  }

}
