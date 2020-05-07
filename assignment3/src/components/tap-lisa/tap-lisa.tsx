import { Component, h, Prop, Event, EventEmitter, Listen} from '@stencil/core';

interface TapActivateEvent{
    name: string;
}

@Component({
    tag: 'tap-lisa',
    styleUrl: 'tap-lisa.css',
    shadow: true
})
export class TapLisa{
@Prop() name: string;
@Prop() active : boolean;
@Event() tapActivate: EventEmitter<TapActivateEvent>;
@Listen("click")
handleClick(){
    this.active = true;
    this.tapActivate.emit({ name: this.name});
}

 render(){
     return( <div class={this.getCSSClass()}> 
     <slot/>
     </div>

     );
 }
 getCSSClass = () => this.active ? "tap-lisa active" : "tap-lisa"; 
}
