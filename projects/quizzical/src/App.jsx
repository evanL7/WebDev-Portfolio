import React, { useState, useEffect } from "react";
import { decode } from 'html-entities'
import StartMenu from './views/StartMenu'
import Quiz from './views/Quiz'
import { nanoid } from "nanoid";

// Refs:
// https://opentdb.com/api_config.php
// https://github.com/mdevils/html-entities
function App() {
    const [showStartMenu, setShowStartMenu] = useState(true)
    const [showQuiz, setShowQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const apiPath = `https://opentdb.com/api.php?amount=5`
        const retries = 1000
        const options = {}
        fetchRetry(apiPath, options, retries)
            .then(resp => resp.json())
            .then(data => {
                if (data.response_code !== 0) {
                    throw new Error(`API response code: ${data.response_code}`)
                }
                const { results } = data
                const decodedResults = results.map(result => {
                    const { category, question, correct_answer, incorrect_answers, difficulty, type } = result
                    return {
                        id: nanoid(),
                        category: decodeText(category),
                        question: decodeText(question),
                        correct_answer: decodeText(correct_answer),
                        incorrect_answers: incorrect_answers.map(decodeText),
                        difficulty,
                        type,
                    }
                })
                setQuestions(decodedResults)
            })
        localStorage.removeItem('answers')
    }, [])

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

const fetchRetry = async (url, options, n) => {
    let error;
    for (let i = 0; i < n; i++) {
        try {
            return await fetch(url, options);
        } catch (err) {
            error = err;
        }
    }
    throw error;
};

function decodeText(text) {
    return decode(text)
}

export default App