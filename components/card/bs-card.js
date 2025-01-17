
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsTextCss, BsSizingCss } from '../../utilities';
import { configureFlushListGroupBorders } from './helper/bs-card-list-group-helper';

export class BsCard extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsSizingCss,
            BsTextCss,
            css`
                :host {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    word-wrap: break-word;
                    background-color: #fff;
                    background-clip: border-box;
                    border: 1px solid rgba(0, 0, 0, 0.125);
                    border-bottom: var(--bs-card-border-bottom, 1px solid rgba(0, 0, 0, 0.125));
                    border-top-left-radius: var(--bs-card-border-top-left-radius, 0.25rem);
                    border-top-right-radius: var(--bs-card-border-top-right-radius, 0.25rem);
                    border-bottom-left-radius: var(--bs-card-border-bottom-left-radius, 0.25rem);
                    border-bottom-right-radius: var(--bs-card-border-bottom-right-radius, 0.25rem);
                    margin-left: var(--bs-card-margin-left);
                    border-left: var(--bs-card-border-left, 1px solid rgba(0, 0, 0, 0.125));
                }

                hr {
                    margin-right: 0;
                    margin-left: 0;
                }

                :host ::slotted(bs-list-group-flush) {
                    --flush-list-group-item-top-left-radius: 0;
                    --flush-list-group-item-top-right-radius: 0;
                    --flush-list-group-item-bottom-right-radius: 0;
                    --flush-list-group-item-bottom-left-radius: 0;
                    --flush-list-group-item-top-border: 1px solid rgba(0, 0, 0, 0.125);
                    --flush-list-group-item-bottom-border: 1px solid rgba(0, 0, 0, 0.125);
                }

                :host ::slotted(bs-list-group-action-flush) {
                    --flush-list-group-item-top-left-radius: 0;
                    --flush-list-group-item-top-right-radius: 0;
                    --flush-list-group-item-bottom-right-radius: 0;
                    --flush-list-group-item-bottom-left-radius: 0;
                    --flush-list-group-item-top-border: 1px solid rgba(0, 0, 0, 0.125);
                    --flush-list-group-item-bottom-border: 1px solid rgba(0, 0, 0, 0.125);
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot name="top-image"></slot>
            <slot name="card-header"></slot>
            <slot id="content"></slot>
            <slot name="card-footer"></slot>
            <slot name="bottom-image"></slot>
        `;
    }
    
    firstUpdated() {
        const contentSlotElement = this.shadowRoot.querySelector('slot#content');
        const slotNodes = contentSlotElement.assignedNodes();
        configureFlushListGroupBorders(slotNodes);
    }
};

window.customElements.define('bs-card', BsCard);

