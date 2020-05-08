import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'footer-lisa',
    styleUrl: 'footer-lisa.css'
})

export class FooterLisa {
    @Event() link: EventEmitter;

    


    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li><a href="https://de.wikipedia.org/wiki/Datenschutz">AGB</a></li>
                <li><a href="https://www.e-recht24.de/artikel/datenschutz/209.html">Impressum</a></li>
                <li><a href="https://www.instagram.com/?hl=de"><img src="/assets/icon.png"></img></a></li>
                <li><a href="https://www.youtube.com/"><img src="/assets/youtube.png"></img></a></li>
            </ul>
        </div>
    }
}