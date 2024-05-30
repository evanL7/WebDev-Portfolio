import './Footer.css'
import githubLogo from '../../assets/icon-github.svg'
import linkedinLogo from '../../assets/icon-linkedin.svg'


function Footer() {
    return (
        <footer>
            <a href='https://github.com/evanL7' target='_blank'>
                <img src={githubLogo} alt='GitHub logo' />
            </a>
            <a href='http://www.linkedin.com/in/eevanlaw' target='_blank'>
                <img src={linkedinLogo} alt='LinkedIn logo' />
            </a>
        </footer>
    )
}

export default Footer