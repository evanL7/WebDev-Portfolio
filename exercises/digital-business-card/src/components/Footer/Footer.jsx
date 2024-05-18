import './Footer.css'

function Footer() {
    const links = [
        {
            href: 'https://x.com',
            imgSrc: './src/assets/icon-x.svg',
            alt: 'Twitter logo'
        },
        {
            href: 'https://www.facebook.com',
            imgSrc: './src/assets/icon-facebook.svg',
            alt: 'Facebook logo'
        },
        {
            href: 'https://www.instagram.com',
            imgSrc: './src/assets/icon-instagram.svg',
            alt: 'Instagram logo'
        },
        {
            href: 'https://github.com/evanL7',
            imgSrc: './src/assets/icon-github.svg',
            alt: 'GitHub logo'
        }
    ]

    return (
        <footer>
            {links.map((link, index) => (
                <a key={index} href={link.href} target='_blank'>
                    <img src={link.imgSrc} alt={link.alt} />
                </a>
            ))}
        </footer>
    )
}

export default Footer