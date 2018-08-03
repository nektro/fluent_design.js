/*
 * Copyright (c) 2018 Sean Denny
 * Custom Elements based on Fluent Design
 * https://github.com/Nektro/fluent-design.js
 * https://docs.microsoft.com/en-us/windows/uwp/design/fluent-design-system/
 */
//
import { FluentElement, __makeElement } from "./FluentElement.js";
//

//
document.head.appendChild(__makeElement('style', [], `
fl-button {
    display: inline-block;
    margin: 1em 0px;
}
fl-button button {
    display: block;
    border: 2px solid transparent;
    background-color: #cfcfcf;
    padding: 5px 24px;
    font-family: inherit;
    user-select: none;
    font-size: 18px;
    letter-spacing: -1px;
}
fl-button button:focus {
    outline: none;
}
fl-button button:hover {
    border: 2px solid #7f7f7f;
}
fl-button button:active {
    background-color: #7f7f7f;
}
`));

//
customElements.define('fl-button', class FLButtonElement extends FluentElement {
    constructor() {
        super();
        this.appendChild(document.createElement("button"));
    }
    static get observedAttributes() {
        return ['label'];
    }
    attributeChangedCallback(attr, oV, nV) {
        if (attr === "label") {
            this.querySelector("button").innerText = nV;
        }
    }
});
