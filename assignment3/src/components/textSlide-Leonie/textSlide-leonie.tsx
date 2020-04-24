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
                    <button class={this.hover ? 'hover': 'hide'} onMouseOver={() => this.hoverImg()}> <img src="/assets/fashion1.png" class="imgHover"/></button>
                <div id="container-text" class={this.text ? 'text' : 'hide'} >
                  <h2>Lorem Ipsum</h2>
                    </div>
                 </div> );
      }
    }
   