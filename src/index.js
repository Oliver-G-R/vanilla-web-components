import '@styles/index.css'
import '@components/Welcome'
import '@components/LinkCard'

const pages = [
    {
        name: 'Doc',
        link: 'https://github.com/Oliver-G-R/vanilla-web-components',
        internPage: false
    },
    {
        name: 'Contact',
        link: '/contact.html',
        internPage: true
    },
]


document.addEventListener('DOMContentLoaded', () => {

    const $card_grid = document.querySelector('#card-grid')

    pages.map(page => {
        const $link_card = document.createElement('cm-link-card')
        $link_card.setAttribute('intern-page', page.internPage)
        $link_card.setAttribute('name', page.name)
        $link_card.setAttribute('link', page.link)
        
        $card_grid.appendChild($link_card)
    })
})