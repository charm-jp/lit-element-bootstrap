
import { LitElement, html } from 'lit-element';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin';
import { BsDropdownItemCss } from './bs-dropdown-item-css';
import { BsContentRebootCss } from '../../content';

export class BsDropdownItemLink extends BsDropdownItemMixin(LitElement) {

    static get properties() {
        return {
            index: Number,
            href: String,
            target: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }

    render() {
        return html`           
            <a class="dropdown-item" style="isolation: isolate;" href="${this.href}" target="${this.target}">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.index = 0;
        this.href = '';
        this.target = '';
    }
}

window.customElements.define('bs-dropdown-item-link', BsDropdownItemLink);
