# fluent_design.js
A JavaScript library offering Custom Elements based on Microsoft's new Fluent Design system

## Installation

```html
<script type="module" src="path/to/fluent_design.js/src/design.js">
```
And that's it! You're ready to start using Fluent elements in your pages.

## Usage

### `<fl-icon>`
Using a Fluent Icon allows you to use any icon available in the UWP icon font **only available on Windows 10**. For a full list of icons see Microsoft's [Fluent documentation](https://docs.microsoft.com/en-us/windows/uwp/design/style/segoe-ui-symbol-font).

#### Attributes
<dl>
    <dt>[<code>icon</code>]</dt>
    <dd>Any of the IDs from the above docs such as <code>Camera</code> or <code>Calendar</code></dd>
    <dt>[<code>char</code>]</dt>
    <dd>Any unicode code point to be set in the Segoe MDL2 Assets font</dd>
</dl>

### `<fl-titlebar>`
The Fluent TitleBar provides a way to have a Win10 looking top nav that includes a history back button as well as the minimize, maximize, and close `<fl-icon>`s

#### Attributes
<dl>
    <dt>[<code>title</code>]</dt>
    <dd>Set the top title brand text with this attribute</dd>
    <dt>[<code>color</code>]</dt>
    <dd>Set the background color of the title bar here. Color correction for making the title text black or white is done automatically.</dd>
    <dd><i>Default</i>: #FFB900</dd>
    <dt>[<code>back</code>]</dt>
    <dd>Determines whether the history back button is shown</dd>
    <dd><i>Default</i>: true</dd>
    <dt>[<code>window</code>]</dt>
    <dd>Determines whether the minimize, maximize, and close <code>fl-icon</code> window controls are shown</dd>
    <dd><i>Default</i>: true</dd>
</dl>

## Ackknowledgements
- Based on [Fluent Design]() by [Microsoft]()
- Thanks to browser devs for making Custom Elements and JS Modules

## License
This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details
