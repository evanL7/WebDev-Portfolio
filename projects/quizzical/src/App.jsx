import React, { useState, useEffect } from "react";
import { decode } from 'html-entities'
import StartMenu from './views/StartMenu'
import Quiz from './views/Quiz'

// Refs:
// https://opentdb.com/api_config.php
// https://github.com/mdevils/html-entities
function App() {
    const [showStartMenu, setShowStartMenu] = useState(true)
    const [showQuiz, setShowQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const retries = 100
        const fetchQuestions = async () => {
            for (let i = 0; i < retries; i++) {
                try {
                    const resp = await fetch('https://opentdb.com/api.php?amount=5')
                    if (!resp.ok) {
                        throw new Error('Failed to fetch questions')
                    } else {
                        const data = await resp.json()
                        for (const question of data.results) {
                            question.question = decodeText(question.question)
                            question.correct_answer = decodeText(question.correct_answer)
                            question.incorrect_answers = question.incorrect_answers.map(decodeText)
                        }
                        setQuestions(data.results)
                        console.log(i)
                        break
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        }
        fetchQuestions()
    }, [])

    function decodeText(text) {
        return decode(text)
    }

    function switchViewCallback() {
        setShowStartMenu(false)
        setShowQuiz(true)
    }

    return (
        <>
            {showStartMenu && <StartMenu switchViewCallback={switchViewCallback} />}
            {showQuiz && <Quiz questions={questions} />}
        </>
    )
}

export default App