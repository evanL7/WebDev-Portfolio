import './Footer.css'
import xLogo from '../../assets/icon-x.svg'
import facebookLogo from '../../assets/icon-facebook.svg'
import instagramLogo from '../../assets/icon-instagram.svg'
import githubLogo from '../../assets/icon-github.svg'

function Footer() {
    const links = [
        {
            href: 'https://x.com',
            imgSrc: xLogo,
            alt: 'Twitter logo'
        },
        {
            href: 'https://www.facebook.com',
            imgSrc: facebookLogo,
            alt: 'Facebook logo'
        },
        {
            href: 'https://www.instagram.com',
            imgSrc: instagramLogo,
            alt: 'Instagram logo'
        },
        {
            href: 'https://github.com/evanL7',
            imgSrc: githubLogo,
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