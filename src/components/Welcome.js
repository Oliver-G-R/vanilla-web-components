class Welcome extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style')

        this.message = ''
        this.description = ''
    }

    static get observedAttributes() {
        return ['message', 'description']
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if(oldValue === newValue) return
        this[prop] = newValue
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            ${this._style.innerHTML = style}
            <h1>
                Welcome to <span>${this.message}</span>
            </h1>
            <p>
                ${this.description}
            </p>
        `
    }

}

const style = /*css*/`
  <style>

    h1{
        color: #000;
        margin: 0;
        font-size: 40px;
    }

    h1 > span{
        background: linear-gradient(
            to right, #f0db4f,#f32170);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    p{
        color: #000;
        font-size: 19px;
        font-weight: 500;
    }
  </style>
`

customElements.define("cm-welcome", Welcome)