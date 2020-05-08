import { Component, h, } from '@stencil/core';

@Component({
    tag: 'footer-lisa',
    styleUrl: 'footer-lisa.css'
})

export class FooterLisa {
    pElement !: HTMLParagraphElement;

 handleAutoren(){
this.pElement.innerHTML = "Lara Neumaier, Leonie Müller, Jessica Noe, Lisa Albers";
 }
    
render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li><a href="https://de.wikipedia.org/wiki/Datenschutz">AGB</a></li>
                <li><a href="https://www.e-recht24.de/artikel/datenschutz/209.html">Impressum</a></li>
                <li><a href="https://www.instagram.com/?hl=de"><img src="/assets/icon.png"></img></a></li>
                <li><a href="https://www.youtube.com/"><img src="/assets/youtube.png"></img></a></li>
            </ul>
            <p ref={(el)=> this.pElement = el as HTMLParagraphElement}></p>
            <button class="button-autor" onClick={() => this.handleAutoren()}>Made by</button>
        </div>
    }
}