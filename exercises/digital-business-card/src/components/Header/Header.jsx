import './header.css'

export default function Header() {
    return (
        <header>
            <img id='img-evan' src='./src/assets/evan.jpg' alt='Evan portrait' />
            <h1>Evan Law</h1>
            <h3>Student</h3>
            <div id='contact-btns'>
                <div>Email</div>
                <div>LinkedIn</div>
            </div>
        </header>
    )
}