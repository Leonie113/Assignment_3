import { Component, h, Prop, Event, EventEmitter, Listen} from '@stencil/core';

export interface TabActivateEvent{
    name: string;
}

@Component({
    tag: 'tap-lisa',
    styleUrl: 'tap-lisa.css',
    shadow: true
})
export class TabLisa{
@Prop() name: string;
@Prop() active : boolean;
@Event() tabActivate: EventEmitter<TabActivateEvent>;
@Listen("click")
handleClick(){
    this.active = true;
    this.tabActivate.emit({ name: this.name});
}

 render(){
     return( <div class={this.getCSSClass()}> 
     <slot/>
     </div>

     );
 }
 getCSSClass = () => this.active ? "tap-lisa active" : "tap-lisa"; 
}
