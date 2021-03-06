import {Component, h, Element, EventEmitter, Event,} from '@stencil/core';

@Component({
    tag: 'login-jessi',
    styleUrl: 'login-jessi.css'
})
export class login {

    @Event() loginErfolgt: EventEmitter;
    @Element() host: HTMLElement;

    login() {
        let form = this.host.querySelector('form');
        if (form.reportValidity()) {
            let inputs = this.host.querySelectorAll('input');
            this.loginErfolgt.emit({ username: inputs[0].value, password: inputs[1].value });
            console.log({ username: inputs[0].value, password: inputs[1].value });
        }
    }

 

    render() {
        return (
            <form class="login-form">
                <div class="login-container">
                    <div class="login-feld">
                        <label class="login-label">Username <span class="req">*</span>:</label>
                        <input class="login-input" name="username" required />
                    </div>
                    <div class="login-feld">
                        <label class="login-label">Password <span class="req">*</span>:</label>
                        <input class="login-input" type="password" name="password" required />
                    </div>
                    <button type="button" class="login-button" onClick={() => { this.login(); }}>Login</button>
                </div>
            </form>
        );
    }
}