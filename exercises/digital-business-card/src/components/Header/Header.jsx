import './Header.css'
import evanImage from '../../assets/evan.jpg'
import emailIcon from '../../assets/icon-mail.svg'
import linkedinIcon from '../../assets/icon-linkedin.svg'

function Header() {
    return (
        <header>
            <img id='img-evan' src={evanImage} alt='Evan portrait' />
            <h1>Evan Law</h1>
            <h3>Software Developer</h3>
            <h6><a href='https://github.com/evanL7' target='_blank'>github.com/evanL7</a></h6>
            <div id='contact-btns'>
                <a href='mailto:eevanlaw@gmail.com' target='_blank'>
                    <div id='email-el'>
                        <img id='mail-img' src={emailIcon} alt='Email icon' />
                        Email
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/eevanlaw/' target='_blank'>
                    <div id='linkedin-el'>
                        <img id='linkedin-img' src={linkedinIcon} alt='LinkedIn icon' />
                        LinkedIn
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header