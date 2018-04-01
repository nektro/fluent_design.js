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
fl-textbox {
    display: block;
    margin: 1em 0;
}
fl-textbox label {
    position: relative;
    top: -5px;
}
fl-textbox input {
    display: block;
    height: 24px;
    width: calc(100% - 24px);
    border: 2px solid #cfcfcf;
    padding: 0px 10px;
    font-size: 15px;
}
fl-textbox input[type="password"] {
    font-size: 30px;
}
fl-textbox input:hover {
    border: 2px solid #7f7f7f;
}
fl-textbox input:focus {
    outline: none;
    border: 2px solid #0078cf;
}
fl-textbox input[disabled] {
    border: 2px solid #cfcfcf;
    background-color: #cfcfcf;
}
`));

//
customElements.define('fl-textbox', class FluentTextboxElement extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.createElement('label'));
        this.appendChild(document.createElement('input'));
        this.children[0].setAttribute('type', 'text');
    }
    static get observedAttributes() {
        return ['name','label','required','type','disabled','autocomplete','placeholder'];
    }
    attributeChangedCallback(attr, oV, nV) {
        if (attr === 'name') {
            this.children[1].setAttribute('name', nV);
            this.children[1].setAttribute('id', `fltb-${nV}`);
            this.children[0].setAttribute('for', `fltb-${nV}`);
        }
        if (attr === 'type') {
            if (['password','email'].indexOf(nV) > -1) {
                this.children[1].setAttribute(attr, nV);
            }
        }
        if (attr === 'label') {
            this.children[0].innerHTML = nV;
        }
        if (['required','disabled','autocomplete','placeholder'].includes(attr)) {
            this.children[1].setAttribute(attr, nV);
        }
    }
});
