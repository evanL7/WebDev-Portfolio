import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Interests from './components/Interests/Interests.jsx'

function App() {
    return (
        <div className='container'>
            <Header />

            <Interests />
            <Footer />
        </div>
    )
}

export default App
