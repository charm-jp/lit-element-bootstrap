
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsFormControlCss } from './css/bs-form-control-css';
import { BsFormControlSizeCss } from './css/bs-form-control-size-css';

export class BsFormSelect extends LitElement {

    static get properties() {
        return {
            arrayData: {type: Array, attribute: 'array-data'},
            jsonData: JSON,
            jsonId: {type: String, attribute: 'json-id'},
            jsonText: {type: String, attribute: 'json-text'},
            selected: Object,
            caption: String,
            multiple: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            _currentSelected: Object
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss,
            css`
                :host {
                    display: block;
                }
                
                select.form-control:focus::-ms-value {
                    color: #495057;
                    background-color: #fff;
                }

                select.form-control[size], 
                select.form-control[multiple] {
                    height: auto;
                }
            `
        ];
    }

    render() {
        return html`
            <select 
                class="form-control"
                ?multiple=${this.multiple}
                ?disabled=${this.disabled}>
                ${this._generateOptions()}
            </select>
        `;
    }

    constructor() {
        super();
        this.arrayData = [];
        this.jsonId = '';
        this.jsonText = '';
        this.caption = '';
        this.multiple = false;
        this.disabled = false;
        this.valid = false;
        this.invalid = false;
    }

    // firstUpdated(_changedProperties) {
    //     const selectElement = this.shadowRoot.querySelector('select');
    //     selectElement.addEventListener('change', event => new Event('change', {composed: true, bubbles: true}));
    // }

    setFocus() {
        const selectElement = this.shadowRoot.querySelector('select');
        selectElement.focus();
    }

    validate() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.checkValidity();
    }

    getValidity() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.validity;
    }

    getValue() {
        return this._currentSelected;
    }

    _generateOptions() {

        if(this.caption) {
            return this._createCaptionOptionItem();
        }

        if (this.arrayData && this.arrayData.length) {
            return this._createOptionItemsFromArray();
        }

        if(this.jsonData && this.jsonData.length && this.jsonId && this.jsonText) {
            return this._createOptionItemsFromJsonData();
        }
    }

    _createCaptionOptionItem() {

        let captionSelected = false;

        if(!this.selected) {
            captionSelected = true;
        }

        const captionOptionItem = new Option(this.caption, '', captionSelected, captionSelected);
        captionOptionItem.setAttribute('disabled', '');

        return [captionOptionItem];
    }

    _createOptionItemsFromArray() {
        let items = [];

        for(let index = 0; index < this.arrayData.length; index++) {

            const item = this.arrayData[index];
            const selectedItem = (item.toString() === this.selected);
            const optionItem = new Option(item, item, selectedItem, selectedItem);

            items.push(optionItem);
        }

        return items
    }

    _createOptionItemsFromJsonData() {
        let items = [];

        for(let index = 0; index < this.jsonData.length; index++) {

            const item = this.jsonData[index];
            const id = item[this.jsonId];
            const value = item[this.jsonText];
            const selectedItem = (value.toString() === this.selected);
            const optionItem = new Option(value, id, selectedItem, selectedItem);

            items.push(optionItem);
        }

        return items
    }
};

window.customElements.define('bs-form-select', BsFormSelect);
