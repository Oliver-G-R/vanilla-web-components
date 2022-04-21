class LinkCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style')

        this.name = ""
        this.link = ""
      
    }

    static get observedAttributes() {
        return ["name", "link"]
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
            <a href="${this.link}">
                ${this.name}
            </a>
        `
    }

}

const style = /*css*/`
    <style>
        a{
            display: block;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 2px;
            text-decoration: none;
            color: #000;
        }
    </style>
`

customElements.define("cm-link-card", LinkCard)