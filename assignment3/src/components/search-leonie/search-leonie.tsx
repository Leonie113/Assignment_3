import { Component, h, Event, State, EventEmitter } from '@stencil/core';

@Component({
    tag: 'search-leonie',
    styleUrl: 'search-leonie.css'
})

export class SearchLeonie{
    @Event() evClick : EventEmitter;
    @Event() evSearch : EventEmitter;
    @Event() evClose: EventEmitter;
    @State() click : boolean = true;
    @State() searchbar : boolean = false;
    @State() close : boolean = true; 
    
    clickButton() : void {
        this.click = !this.click;
        this.showSearchbar();
        this.evClick.emit({visible: this.click}
    )
    }
    showSearchbar() : void {
        this.searchbar = !this.searchbar;
        this.evSearch.emit({visible: this.searchbar})
    }
    
    showCloseButton() : void {
        this.close = !this.close;
        this.evClose.emit({visible: this.close})
    }
    
      render() {
        return(  <div class="searchbar-main">
                <nav>
                    <button class={this.click ? 'search': 'hide'} onClick={() => this.clickButton()}> <img src="/assets/search.png" class="search-button"/></button>
                </nav>   
                <div id="container-input" class={this.searchbar ? 'searchbar' : 'hide'} >
                    <form class="input-feld">
                        <input type="search" list="fashion" placeholder='Search for fashion brands...' maxlength="20"/>
                        <datalist id="fashion">
                            <option value ="Moncler"></option>
                            <option value ="Prada"></option>
                            <option value ="Burberry"></option>
                            <option value ="Saint Laurent"></option>
                            <option value ="Stone Island"></option>
                            <option value ="Versace"></option>
                            <option value ="Nike"></option>
                            <option value ="Off-White"></option>
                            <option value ="Gucci"></option>
                        </datalist>
                        <button class={this.close ? 'close' : 'hide'} onClick={() => this.showCloseButton()}><img src="/assets/close.png" class="close-button"/></button>
                    </form>
                    </div>
                 </div> );
      }
    }
   