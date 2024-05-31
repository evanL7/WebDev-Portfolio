import './Header.css'

function Header() {
    const trollFaceImg = 'https://i.pinimg.com/originals/66/ee/4c/66ee4c82ebd986bd491494d76fb0a4a4.png'
    return (
        <header>
            <div className='header--title'>
                <img className='header--title--img' src={trollFaceImg} />
                <span className='header--title-text'>Meme Generator</span>
            </div>
            <div className='header--name'>
                React Course - Project 3
            </div>
        </header>
    )
}

export default Header