/*
 * Copyright (c) 2018 Sean Denny
 * Custom Elements based on Fluent Design
 * https://github.com/Nektro/fluent-design.js
 * https://docs.microsoft.com/en-us/windows/uwp/design/fluent-design-system/
 */
//
//
export class FluentElement extends HTMLElement {
    constructor() {
        super();
    }
}

export function __makeElement(name, attrs = [], value = "") {
    const el = document.createElement(name);
    attrs.forEach(v => {
        el.setAttribute(v[0], v[1]);
    });
    el.innerHTML = value;
    return el;
}
