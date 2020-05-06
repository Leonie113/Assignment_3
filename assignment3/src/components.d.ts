/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoginJessi {
    }
    interface MediaLara {
        "image": Array<String>;
        "imageNumber": number;
        "slideIndex": number;
    }
    interface MediagalleryLara {
        "image": Array<String>;
        "imageNumber": number;
        "slideIndex": number;
    }
    interface PopupLara {
        "inputwert": string;
    }
    interface SearchLeonie {
    }
    interface SternBewertung {
    }
    interface TextimgLeonie {
    }
}
declare global {
    interface HTMLLoginJessiElement extends Components.LoginJessi, HTMLStencilElement {
    }
    var HTMLLoginJessiElement: {
        prototype: HTMLLoginJessiElement;
        new (): HTMLLoginJessiElement;
    };
    interface HTMLMediaLaraElement extends Components.MediaLara, HTMLStencilElement {
    }
    var HTMLMediaLaraElement: {
        prototype: HTMLMediaLaraElement;
        new (): HTMLMediaLaraElement;
    };
    interface HTMLMediagalleryLaraElement extends Components.MediagalleryLara, HTMLStencilElement {
    }
    var HTMLMediagalleryLaraElement: {
        prototype: HTMLMediagalleryLaraElement;
        new (): HTMLMediagalleryLaraElement;
    };
    interface HTMLPopupLaraElement extends Components.PopupLara, HTMLStencilElement {
    }
    var HTMLPopupLaraElement: {
        prototype: HTMLPopupLaraElement;
        new (): HTMLPopupLaraElement;
    };
    interface HTMLSearchLeonieElement extends Components.SearchLeonie, HTMLStencilElement {
    }
    var HTMLSearchLeonieElement: {
        prototype: HTMLSearchLeonieElement;
        new (): HTMLSearchLeonieElement;
    };
    interface HTMLSternBewertungElement extends Components.SternBewertung, HTMLStencilElement {
    }
    var HTMLSternBewertungElement: {
        prototype: HTMLSternBewertungElement;
        new (): HTMLSternBewertungElement;
    };
    interface HTMLTextimgLeonieElement extends Components.TextimgLeonie, HTMLStencilElement {
    }
    var HTMLTextimgLeonieElement: {
        prototype: HTMLTextimgLeonieElement;
        new (): HTMLTextimgLeonieElement;
    };
    interface HTMLElementTagNameMap {
        "login-jessi": HTMLLoginJessiElement;
        "media-lara": HTMLMediaLaraElement;
        "mediagallery-lara": HTMLMediagalleryLaraElement;
        "popup-lara": HTMLPopupLaraElement;
        "search-leonie": HTMLSearchLeonieElement;
        "stern-bewertung": HTMLSternBewertungElement;
        "textimg-leonie": HTMLTextimgLeonieElement;
    }
}
declare namespace LocalJSX {
    interface LoginJessi {
        "onLoginErfolgt"?: (event: CustomEvent<any>) => void;
    }
    interface MediaLara {
        "image"?: Array<String>;
        "imageNumber"?: number;
        "slideIndex"?: number;
    }
    interface MediagalleryLara {
        "image"?: Array<String>;
        "imageNumber"?: number;
        "slideIndex"?: number;
    }
    interface PopupLara {
        "inputwert"?: string;
    }
    interface SearchLeonie {
        "onEvClick"?: (event: CustomEvent<any>) => void;
        "onEvClose"?: (event: CustomEvent<any>) => void;
        "onEvSearch"?: (event: CustomEvent<any>) => void;
    }
    interface SternBewertung {
        "onSternWertung"?: (event: CustomEvent<any>) => void;
    }
    interface TextimgLeonie {
        "onEvHover"?: (event: CustomEvent<any>) => void;
        "onEvText"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "login-jessi": LoginJessi;
        "media-lara": MediaLara;
        "mediagallery-lara": MediagalleryLara;
        "popup-lara": PopupLara;
        "search-leonie": SearchLeonie;
        "stern-bewertung": SternBewertung;
        "textimg-leonie": TextimgLeonie;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "login-jessi": LocalJSX.LoginJessi & JSXBase.HTMLAttributes<HTMLLoginJessiElement>;
            "media-lara": LocalJSX.MediaLara & JSXBase.HTMLAttributes<HTMLMediaLaraElement>;
            "mediagallery-lara": LocalJSX.MediagalleryLara & JSXBase.HTMLAttributes<HTMLMediagalleryLaraElement>;
            "popup-lara": LocalJSX.PopupLara & JSXBase.HTMLAttributes<HTMLPopupLaraElement>;
            "search-leonie": LocalJSX.SearchLeonie & JSXBase.HTMLAttributes<HTMLSearchLeonieElement>;
            "stern-bewertung": LocalJSX.SternBewertung & JSXBase.HTMLAttributes<HTMLSternBewertungElement>;
            "textimg-leonie": LocalJSX.TextimgLeonie & JSXBase.HTMLAttributes<HTMLTextimgLeonieElement>;
        }
    }
}
