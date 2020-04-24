/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SearchLeonie {
    }
    interface TextslideLeonie {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSearchLeonieElement extends Components.SearchLeonie, HTMLStencilElement {
    }
    var HTMLSearchLeonieElement: {
        prototype: HTMLSearchLeonieElement;
        new (): HTMLSearchLeonieElement;
    };
    interface HTMLTextslideLeonieElement extends Components.TextslideLeonie, HTMLStencilElement {
    }
    var HTMLTextslideLeonieElement: {
        prototype: HTMLTextslideLeonieElement;
        new (): HTMLTextslideLeonieElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "search-leonie": HTMLSearchLeonieElement;
        "textslide-leonie": HTMLTextslideLeonieElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SearchLeonie {
        "onEvClick"?: (event: CustomEvent<any>) => void;
        "onEvClose"?: (event: CustomEvent<any>) => void;
        "onEvSearch"?: (event: CustomEvent<any>) => void;
    }
    interface TextslideLeonie {
        "onEvHover"?: (event: CustomEvent<any>) => void;
        "onEvText"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "search-leonie": SearchLeonie;
        "textslide-leonie": TextslideLeonie;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "search-leonie": LocalJSX.SearchLeonie & JSXBase.HTMLAttributes<HTMLSearchLeonieElement>;
            "textslide-leonie": LocalJSX.TextslideLeonie & JSXBase.HTMLAttributes<HTMLTextslideLeonieElement>;
        }
    }
}
