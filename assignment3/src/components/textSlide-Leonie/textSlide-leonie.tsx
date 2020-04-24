//TextSlide-Component (Leonie Müller)

import { Component, h, Event, State, EventEmitter } from '@stencil/core';

@Component({
    tag: 'textslide-leonie',
    styleUrl: 'textSlide-leonie.css'
})

export class textSlideLeonie{
    @Event() evHover : EventEmitter;
    @Event() evText : EventEmitter;
    @State() hover : boolean = true;
    @State() text : boolean = false;
    
    hoverImg() : void {
        this.hover = !this.hover;
        this.showText();
        this.evHover.emit({visible: this.hover}
    )
    }
    showText() : void {
        this.text = !this.text;
        this.evText.emit({visible: this.text})
    }
    
      render() {
        return(  <div class="textSlide-main">
          <button class={this.hover ? 'hover': 'hide'} onMouseOver={() => this.hoverImg()}> <img src="/assets/fashion1.png" class="imgHover1"/></button>
          <div id="container-text" class={this.text ? 'text' : 'hide'} >
            <img id="showBild" src="/assets/fashion1.png"></img>
            <div class="text-position">
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h2>
            </div>
          </div>
          <button class={this.hover ? 'hover': 'hide'} onMouseOver={() => this.hoverImg()}> <img src="/assets/fashion2.jpg" class="imgHover2"/></button>
          <div id="container-text" class={this.text ? 'text' : 'hide'} >
            <img src="/assets/fashion2.jpg"></img>
            <div class="text-position">
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h2>
            </div>
          </div>
        </div> );
      }
    }
   