
import { LitElement, html } from 'lit-element';
import { BsBadgeCss } from './bs-badge-css.js';
import { BsContentRebootCss } from '../../content';

export class BsBadge extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsBadgeCss
        ];
    }
    
    render() {
        return html`
            <span class="badge">
                <slot></slot>
            </span>
        `;
    }
};

window.customElements.define('bs-badge', BsBadge);