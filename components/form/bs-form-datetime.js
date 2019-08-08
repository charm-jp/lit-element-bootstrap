
import { LitElement, html, css } from 'lit-element';
import { BsFormInputMixin } from './bs-form-input-mixin';
import { BsFormControlCss } from './css/bs-form-control-css';
import { BsFormControlSizeCss } from './css/bs-form-control-size-css';
import { BsContentRebootCss } from '../../content';
import '@fooloomanzoo/datetime-picker/datetime-picker'

export class BsFormDateTime extends LitElement {
    static get properties() {
        return {
            value: String,
        }
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss,

        ];
    }

    firstUpdated() {
        super.firstUpdated();

        let dtPicker = this.shadowRoot.querySelector('datetime-picker');
        dtPicker.shadowRoot.querySelector('button#confirm').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('change', {
                detail: dtPicker
            }));
        })
    }

    render() {
        return html`
            <style>
            datetime-picker {

  --input-field-padding: 0.375rem 0.75rem;
  --input-padding: 0.075rem 0.8rem;

  --input-border-color: 1px solid #ced4da;

  --input-color: $baseColor;
  --input-background: #fff;

  --input-picker-color: $baseColor;
  --input-picker-background: #fff;

  --input-focus-background: #fff;
  --input-focus-color: $baseColor;

  --inner-input-focus-background: #fff;
  --inner-input-focus-color: #000;
  --dropdown-background: transparent;
}
</style>
           <datetime-picker value="${this.value}"></datetime-picker>
        `;
    }

    getInputValue() {
        const inputElement = this.shadowRoot.querySelector('button#confirm');
        return inputElement.value;
    }
};

window.customElements.define('bs-form-datetime', BsFormDateTime);
