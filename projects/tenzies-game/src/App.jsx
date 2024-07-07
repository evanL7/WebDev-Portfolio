import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import Die from './components/Die/Die'
import './App.css'

function App() {
    const [dieArray, setDieArray] = useState(allNewDice)
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dieArray.every(die => die.isHeld)
        const firstValue = dieArray[0].value
        const allSame = dieArray.every(die => die.value === firstValue)
        if (allHeld && allSame) {
            setTenzies(true)
        }
    }, [dieArray])
    
    function handleRoll() {
        if (tenzies) {
            setDieArray(allNewDice())
            setTenzies(false)
            return
        }

        setDieArray(prevArray =>
            prevArray.map(die => 
                die.isHeld
                ? die
                : { ...die, value: getRandomNumber() }
            )
        )
    }

    function holdDice(id) {
        setDieArray(prevArray => 
            prevArray.map(die => 
                die.id === id
                ? { ...die, isHeld: !die.isHeld }
                : die
        ))
    }

    function allNewDice() {
        const result = []
        for (let i = 0; i < 10; i++) {
            result.push({
                value: getRandomNumber(),
                isHeld: false,
                id: nanoid(),
            })
        }
        return result
    }
    
    function getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1
    }

    return (
        <>
            <main>
                {tenzies && <Confetti />}
                <h1 className='h1--title'>Tenzies</h1>
                <p className='p--instructions'>
                    Roll until all dice are the same.
                    Click each die to freeze it at its current value between rolls.
                </p>
                <div className='grid--container'>
                    {dieArray.map(die => (
                        <Die
                            key={die.id}
                            value={die.value}
                            isHeld={die.isHeld}
                            holdDice={() => holdDice(die.id)}
                        />
                    ))}
                </div>
                <button onClick={handleRoll} className='button--roll'>{tenzies ? 'New Game' : 'Roll'}</button>
            </main>
        </>
    )
}

export default App
