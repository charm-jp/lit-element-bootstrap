
import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsFormControlCss } from './css/bs-form-control-css';
import { BsContentRebootCss } from '../../content';

export class BsFormTextarea extends LitElement {

    static get properties() {
        return {
            rows: Number,
            cols: Number,
            maxlength: Number,
            minlength: Number,
            tabIndex: Number,
            placeholder: String,
            wrap: {type: Boolean, reflect: true},
            required: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            value: {type: String, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            css`
                textarea.form-control {
                    height: auto;
                }
            `
        ];
    }

    render() {
        return html`
            
            <textarea 
                class="form-control"
                tabIndex=${this.tabIndex || ''}
                ?wrap=${this.wrap}
                rows=${this.rows || ''}
                cols=${this.cols || ''}
                minlength=${this.minlength || ''}
                maxlength=${this.maxlength || ''}
                ?required=${this.required || ''}
                ?disabled=${this.disabled || ''}
                .value=${this.value || ''}
                placeholder=${this.placeholder || ''}>
            </textarea>
        `;
    }

    constructor() {
        super();
        this.value = '';
        this.wrap = false;
        this.required = false;
        this.disabled = false;
        this.valid = false;
        this.invalid = false;
    }

    setFocus() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        textareaElement.focus();
    }

    validate() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        return textareaElement.checkValidity();
    }

    getValidity() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        return textareaElement.validity;
    }
};

window.customElements.define('bs-form-textarea', BsFormTextarea);
