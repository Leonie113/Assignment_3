import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'popup-lara',
  styleUrl: 'popup-lara.css',
  shadow: true,
})

export class PopupLara implements ComponentInterface{

 
  @Prop () inputwert: string;


  divElement!: HTMLDivElement;
  pElement!: HTMLParagraphElement;

  invisible(el: HTMLElement): void {
    el.style.display="none"
  }

  inputChanged(event){
    console.log('input changed: ', event.target.value);
    this.inputwert = event.target.value;
    return this.inputwert;
  }

  handleClickAnmelden(){
    if (this.inputwert === undefined || this.inputwert === ""){
      this.pElement.classList.add("errorp");
      this.pElement.innerHTML = "Du hast vergessen deine Email einzugeben";
    } else{
      this.invisible(this.divElement);
    }
  }


  render() {
    return (
      <Host>
        <div ref={(el) => this.divElement = el as HTMLDivElement}>
          <img id="" src="/assets/newsletter.png" ></img>
          <button class="buttonx" onClick={() => this.invisible(this.divElement)}> &times; </button>
          <h1>Herzlich Willkommen</h1> 
          <span>
            <p>
              <slot></slot>
            </p>
          </span>
          <input name="username" placeholder="Gib deine Email ein" required onChange={(event: UIEvent) => this.inputChanged(event)}></input>
          <p ref={(el) => this.pElement = el as HTMLParagraphElement}></p>
          <button class="button-registieren" onClick={() => this.handleClickAnmelden()}>ANMELDEN</button>
        </div>
      </Host>
    );
  }

}
