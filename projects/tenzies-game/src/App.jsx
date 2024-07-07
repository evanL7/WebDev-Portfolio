import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import Die from './components/Die/Die'
import './App.css'

function App() {
    const [dieArray, setDieArray] = useState(allNewDice)
    const [rolls, setRolls] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        setHighScore(localStorage.getItem('rolls') || 0)
    })

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
            if (rolls < highScore) {
                setHighScore(rolls)
                localStorage.setItem('rolls', rolls)
            }
            setRolls(0)
            setDieArray(allNewDice())
            setTenzies(false)
            return
        }

        setRolls(prevRolls => prevRolls + 1)
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
                <section className='section--scores'>
                    <h5 className='h5--counter'>Rolls: {rolls}</h5>
                    <h6 className='h6--high-score'>Fewest Rolls: {highScore}</h6>
                </section>
                <button onClick={handleRoll} className='button--roll'>{tenzies ? 'New Game' : 'Roll'}</button>
            </main>
        </>
    )
}

export default App
