import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import cardElements from './utils/cardElements'

function App() {
    return (
        <div>
            <Navbar />
            {cardElements}
            <Footer />
        </div>
    )
}

export default App