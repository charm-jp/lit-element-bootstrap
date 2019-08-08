
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';
import { BsListGroupItemCommonCss } from './bs-list-group-item-common-css';
import { BsListGroupItemActionCommonCss } from './bs-list-group-item-action-common-css';
import {BsFlexAlignItemsCss, BsFlexDisplayCss, BsFlexJustifyCss} from "../../utilities/flex";

export class BsListGroupItemActionLink extends LitElement {

    static get properties() {
        return {
            index: Number,
            href: String,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsListGroupItemActionCommonCss,
            BsListGroupItemCommonCss,
            BsFlexJustifyCss,
            BsFlexDisplayCss,
            BsFlexAlignItemsCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" class="list-group-item list-group-item-action" style="display: flex; justify-content: space-between">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.index = -1;
        this.active = false;
        this.href = '#';
        this.disabled = false;
    }

    firstUpdated() {
       const listGroupItemAction = this.shadowRoot.querySelector('a.list-group-item-action');
        listGroupItemAction.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        if (this.disabled) {
            event.preventDefault();
            return;
        }

        if(this.href === '#') {
            event.preventDefault();
        }

        const listGroupItemSelectedEvent = new CustomEvent('list-group-item-selected', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(listGroupItemSelectedEvent);
    }
};

window.customElements.define('bs-list-group-item-action-link', BsListGroupItemActionLink);
