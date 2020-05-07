import { Component, h, Prop, State, Event, EventEmitter, Listen} from '@stencil/core';

export interface AcknowledgeEvent{
    when: Date;
}

@Component({
    tag: 'alert-lisa',
    styleUrl: 'alert-lisa.css',
    scoped: true
})
export class AlertLisa{
    @Prop() text: string = "This is an important alert!";
    @Prop() kind: "info" | "succes" | "error" = "info";
    @State() acknowlegded: boolean = false;
    @Event() acknowlegde: EventEmitter<AcknowledgeEvent>;

componentDidLoad(){
    console.log("Fully loaded");
}

componentDidUpdate(){
    console.log("Component updated");
}

    @Listen("click")
    handleAcknowledge(){
        this.acknowlegded = true;
        this.acknowlegde.emit({
        when: new Date});
    }


    getCSSClass = () => this.kind + (this.acknowlegded ? " acknowledge" : "");

    render(){ console.log("render");
        return (<p class={this.getCSSClass()}>
            {this.text}
            <span> Acknowlegde</span>
            </p>
            );
    }
}