/*
 * Copyright (c) 2018 Sean Denny
 * Custom Elements based on Fluent Design
 * https://github.com/Nektro/fluent-design.js
 * https://docs.microsoft.com/en-us/windows/uwp/design/fluent-design-system/
 * https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
 */
//
import { FluentElement, __makeElement } from "./FluentElement.js";
//

//
document.head.appendChild(__makeElement('style', [], `
fl-nav {
    display: flex;
    height: 100%;
}
fl-nav > span[slot="nav"] {
    display: flex;
    flex-direction: column;
}
fl-nav > span[slot="content"] {
    flex-grow: 1;
}
`));

//
customElements.define('fl-nav', class FluentNavigationViewElement extends FluentElement {
    constructor() {
        super();
        this.querySelectorAll(this.selector_nav).forEach((v,i) => {
            this.children[0].appendChild(v);
        });
        if (this.querySelectorAll(`${this.selector_nav}.active`).length === 0) {
            this._select(0);
        }
        else {
            const pe = this;
            pe._select(Array.from(pe.querySelectorAll(pe.selector_nav)).indexOf(this.querySelector(`${this.selector_nav}.active`)));
        }
    }
    get selector_nav() {
        return 'span[slot="nav"] fl-nav-ni';
    }
    get selector_content() {
        return 'span[slot="content"] fl-nav-ci';
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
    }
});

//
document.head.appendChild(__makeElement('style', [], `
fl-nav-ni {
    border-left: 5px solid transparent;
    padding-right: 50px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
}
fl-nav-ni fl-icon,
fl-nav-ni span:first-child {
    margin: 10px;
    line-height: 28px;
    margin-left: 5px;
}
fl-nav-ni fl-icon {
    font-size: 24px;
}
fl-nav-ni span:nth-child(2) {
    line-height: 48px;
    vertical-align: middle;
}
fl-nav-ni:hover {
    background-color: #dfdfdf;
}
fl-nav-ni:active {
    background-color: #afafaf;
}
fl-nav-ni.active {
    border-left: 5px solid #0078cf;
    border-left: 5px solid var(--fluent-theme-color);
}
`));

//
customElements.define('fl-nav-ni', class FluentNavigationViewElement extends FluentElement {
    constructor() {
        super();
        this.addEventListener('click', function() {
            const pe = this.parentElement.parentElement;
            pe._select(Array.from(pe.querySelectorAll(pe.selector_nav)).indexOf(this));
        });
    }
});

//
document.head.appendChild(__makeElement('style', [], `
fl-nav-ci {
    display: none;
    margin: 15px;
}
fl-nav-ci > h1:first-child {
    margin: 0px;
    background-color: white;
    padding-bottom: 0.33em;
}
fl-nav-ci.active {
    display: block;
}
fl-nav-ci > section {
    margin-bottom: 50px;
}
`))

//
customElements.define('fl-nav-ci', class FluentNavigationViewElement extends FluentElement {
    constructor() {
        super();
    }
});
