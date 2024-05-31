import './Meme.css'

function Meme() {
    return (
        <main>
            <div className='form'>
                <div>
                    <label htmlFor='top-text'>Top Text</label>
                    <input id='top-text' className='form--input' type='text' placeholder='Shut up' />
                </div>
                <div>
                    <label htmlFor='bottom-text'>Bottom Text</label>
                    <input id='bottom-text' className='form--input' type='text' placeholder='and take my money' />
                </div>
                <button className='form--button'>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}

export default Meme