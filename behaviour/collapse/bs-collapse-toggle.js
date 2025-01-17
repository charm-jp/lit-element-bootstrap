
import { LitElement, html } from 'lit-element';

export class BsCollapseToggle extends LitElement {
    
    static get properties() {
        return {
            target: {type: String, reflect: true}
        };
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.target = '';
    }
    
    firstUpdated() {
        this.addEventListener('bs-button-click', event => this._handleToggleCollapse(event));
    }
    
    _handleToggleCollapse() {
        
        if(!this.target) {
            return;
        }
        
        const toggleCollapseEvent = new CustomEvent('bs-collapse-toggle', {
            bubbles: true, 
            composed: true,
            detail: {
                target: this.target
            }
        });
        
        this.dispatchEvent(toggleCollapseEvent);
    }
};

window.customElements.define('bs-collapse-toggle', BsCollapseToggle);