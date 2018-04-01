/* 
 * Copyright (c) 2017 Sean Denny
 * Custom Elements based on Fluent Design
 * https://github.com/Nektro/fluent-design.js
 * https://docs.microsoft.com/en-us/windows/uwp/design/fluent-design-system/
 * https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/tabs-pivot
 */
//
import { FluentElement, __makeElement } from "./FluentElement.js";
//

//
document.head.appendChild(__makeElement('style', [], `
fl-pivot {
    display: flex;
    flex-direction: column;
}
fl-pivot > .nav {
    position: relative;
    overflow-y: hidden;
    height: 56px;
}
fl-pivot > .nav > nav {
    padding: 0px 10px;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 56px;
	background-color: #eee;
}
fl-pivot > .content > div {
    display: none;
    margin: 15px;
}
fl-pivot > .content > div.active {
    display: block;
}
`));

//
customElements.define('fl-pivot', class extends FluentElement {
    constructor() {
        super();
        if (this.querySelectorAll(`${this.selector_nav}.active`).length === 0) {
            this._select(0);
        }
        else {
            const pe = this;
            pe._select(Array.from(pe.querySelectorAll(pe.selector_nav)).indexOf(this.querySelector(`${this.selector_nav}.active`)));
        }
    }
    get selector_nav() {
        return 'div.nav nav fl-pivot-item';
    }
    get selector_content() {
        return 'div.content > div';
    }
    _select(n) {
        this.querySelectorAll(this.selector_nav).forEach((v,i) => {
            v.setAttribute('class', '');
            if (i === n) v.setAttribute('class', 'active');
        });
        this.querySelectorAll(this.selector_content).forEach((v,i) => {
            v.setAttribute('class', '');
            if (i === n) v.setAttribute('class', 'active');
        });
        this.dispatchEvent(new CustomEvent('fl-pivot.select'));
    }
});

//
document.head.appendChild(__makeElement('style', [], `
fl-pivot-item {
    display: inline-block;
    padding: 10px;
    border-bottom: 3px solid transparent;
    position: relative;
    color: #afafaf;
    font-size: 20px;
    cursor: pointer;
}
fl-pivot-item.active {
    color: black;
    font-weight: bold;
}
`));

//
customElements.define('fl-pivot-item', class extends FluentElement {
    constructor() {
        super();
        this.addEventListener('click', function() {
            const pe = this.parentElement.parentElement.parentElement;
            pe._select(Array.from(pe.querySelectorAll(pe.selector_nav)).indexOf(this));
        })
    }
});
