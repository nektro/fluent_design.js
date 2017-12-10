/* 
 * Copyright (c) 2017 Sean Denny
 * Custom Elements based on Fluent Design
 * https://github.com/Nektro/fluent-design.js
 * https://docs.microsoft.com/en-us/windows/uwp/design/fluent-design-system/
 */
//
import { FluentElement, __makeElement } from "./FluentElement.js";
//

//
const css_text = `
:host {
    display: flex;
    flex-direction: row;
    height: 32px;
    background-color: #FFB900;
    color: white;
}
:host span,
:host fl-icon {
    font-size: 14px;
    line-height: 32px;
    padding: 0px 10px;
}
:host span {
    font-size: 16px;
}
:host span:nth-child(2) {
    flex-grow: 1;
    font-family: inherit;
}
`;

//
customElements.define('fl-titlebar', class FluentTitleBarElement extends FluentElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        // not using <fl-icon> becuase Segoe MDL2 Assets is only on Windows
        this.shadowRoot.appendChild(__makeElement('fl-icon', [['icon','ChromeBack']]));
        this.shadowRoot.children[0].addEventListener('click', function(e) { window.history.back(); });
        this.shadowRoot.appendChild(__makeElement('span', [], "[[NAME]]"));
        this.shadowRoot.appendChild(__makeElement('fl-icon', [['icon','ChromeMinimize']]));
        this.shadowRoot.appendChild(__makeElement('fl-icon', [['icon','ChromeRestore']]));
        this.shadowRoot.appendChild(__makeElement('fl-icon', [['icon','ChromeClose']]));
        this.shadowRoot.appendChild(__makeElement('style', [], css_text));
    }
    static get observedAttributes() {
        return ['title','color','back','window'];
    }
    attributeChangedCallback(attr, oV, nV) {
        if (attr === 'color') {
            this.style.backgroundColor = nV;
            let rgb = this.style.backgroundColor.substring(4).split("").reverse();
            rgb.shift();
            rgb = rgb.reverse().join("").split(", ").map(function(x) { return parseInt(x); });
            let o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
            this.style.color = ((o > 125) ? ('black') : ('white'));
        }
        if (attr === 'title') {
            this.shadowRoot.children[1].innerHTML = nV;
        }
        if (attr === 'back') {
            this.shadowRoot.children[0].style.display = (((nV) == ('true')) ? 'initial' : 'none');
        }
        if (attr === 'window') {
            this.shadowRoot.children[2].style.display = (((nV) == ('true')) ? 'initial' : 'none');
            this.shadowRoot.children[3].style.display = (((nV) == ('true')) ? 'initial' : 'none');
            this.shadowRoot.children[4].style.display = (((nV) == ('true')) ? 'initial' : 'none');
        }
    }
    connectedCallback() {
        if (!(this.hasAttribute('color'))) {
            this.setAttribute('color', '#0078cf');
        }
    }
});
