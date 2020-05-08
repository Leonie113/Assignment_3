import { Component, h, Element, Listen, Prop, Watch} from '@stencil/core';

import {TabActivateEvent} from "./tap-lisa";

@Component({
    tag: 'taps-lisa',
    styleUrl: 'taps-lisa.css',
    shadow: true
})
export class TapsLisa{
@Element() element;
@Prop ({mutable:true}) activeTab: string;
@Watch("activeTab")
handleActiveTabChange (newValue: string){
const headings = this.getHeadings();
headings.array.forEach(heading => {
if (heading.name === newValue){
    heading.active = true;
}    
else{
    heading.active = false;
}
});
}

    @Listen("tabActivate")
    handleTabActivate(e: CustomEvent <TabActivateEvent>){
        this.activeTab = e.detail.name;
}
    componentDidLoad(){
        if (this.activeTab === undefined){
            const headings = this.getHeadings();
            const haveActiveTab = headings.filter (heading => heading.active).length > 0;
            if (!haveActiveTab && headings.length > 0){
                this.activeTab = headings [0].name;
        }
    }else{
        this.handleActiveTabChange (this.activeTab);
    }
    }

 render(){
     return( 
    <div class="my-tabs-container">
        <slot/>
      <div class="header">
        <img id="logo" src="/assets/symbol.png"></img>
        </div>
    </div>
    );
 }
 getHeadings = () => [].slice.call(this.element.querySelector(".my-tabs-container").children)
 .filter (child => child.tagName.toLowerCase() === "tap-lisa");

}