
import { LitElement, html, css } from 'lit-element';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin';
import { BsDropdownItemCss } from './bs-dropdown-item-css';
import { BsContentRebootCss } from '../../content';

export class BsDropdownItemButton extends BsDropdownItemMixin(LitElement) {

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }

    render() {
        return html`<button class="dropdown-item" type="button"><slot></slot></button>
        `;
    }
};

window.customElements.define('bs-dropdown-item-button', BsDropdownItemButton);
