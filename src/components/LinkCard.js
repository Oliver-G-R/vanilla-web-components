class LinkCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style')

        this.name = ""
        this.link = ""
        this.internPage = true

    }

    static get observedAttributes() {
        return ["name", "link", "intern-page"]
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        switch (prop) {
            case "name":
                this.name = newValue
                break
            case "link":
                this.link = newValue
                break
            case "intern-page":
                this.internPage = newValue === "true" 
                break
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            ${this._style.innerHTML = style}
            <a  
                target="${this.internPage ? "_self" : "_blank"}"
                id="link" 
                href="${this.link}">
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