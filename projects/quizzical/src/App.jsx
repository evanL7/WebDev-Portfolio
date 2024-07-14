import React, { useState, useEffect } from "react";
import StartMenu from './views/StartMenu'
import Quiz from './views/Quiz'

// Refs:
// https://opentdb.com/api_config.php
// https://github.com/mdevils/html-entities
function App() {
    const [showStartMenu, setShowStartMenu] = useState(true)
    const [showQuiz, setShowQuiz] = useState(false)    

    function switchViewCallback() {
        setShowStartMenu(false)
        setShowQuiz(true)
    }

    return (
        <>
            {showStartMenu && <StartMenu switchViewCallback={switchViewCallback} />}
            {showQuiz && <Quiz />}
        </>
    )
}

export default App