import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Quiz component
const StyledQuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;
    background-color: #F5F7FB;
`
const StyledButton = styled.button`
    background-color: #4D5B9E;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 0.625rem;
    font-family: 'Karla', sans-serif;
    font-size: 0.69rem;
    height: 2.188rem;
    width: 7.5rem;
    margin: 1.25rem auto;

    &:hover {
        background-color: #3B4A7E;
    }
`

// Question component
const QuestionsContainer = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 50%;
`
const CategoryText = styled.p`
    color: gray;
    font-family: 'Karla', sans-serif;
    font-size: 0.75rem;
    margin: 0.5rem 0 0 0;
`
const QuestionText = styled.p`
    color: #293264;
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.3rem;
`
const OptionsContainer = styled.div`
    display: flex;
`
const Option = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8f94af;
    border: 1px solid #a1a9cc;
    border-radius: 0.5rem;
    font-size: 0.64rem;
    font-family: 'Inter', sans-serif;
    height: 1.291rem;
    width: fit-content;
    padding: 0.1rem 1rem;
    margin-right: 0.8rem;
    white-space: nowrap;

    ${props => props.correct_option && `
        background-color: #94D7A2;
        border: none;
        color: #293264;
    `};

    ${props => props.incorrect_option && `
        background-color: #F8BCBC;
        border: none;
        color: #8f94af;
    `};
`
const Line = styled.hr`
    border: 0.5px solid #D6DBF5;
    width: 100%;
    margin: 0.8rem 0 0 0;
`
const ResultsSection = styled.section`
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
`
const ResultsText = styled.span`
    color: #293264;
    margin-right: 1.5rem;
`

export function QuizAnswers( { questions } ) {
    const [score, setScore] = useState(0)
    const answers = JSON.parse(localStorage.getItem('answers'))

    useEffect(() => {
        calculateScore()
    }, [])

    const calculateScore = () => {
        let score = 0
        answers.forEach(answer => {
            if (answer.correctAnswer === answer.options.find(option => option.selected).option) {
                score++
            }
        })
        setScore(score)
    }

    const question = q => {
        const index = answers.findIndex(answer => answer.id === q.id)
        return (
        <QuestionsContainer>
            <CategoryText>{q.category} — {capitalizeFirstLetter(q.difficulty)}</CategoryText>
            <QuestionText>{q.question}</QuestionText>
            <OptionsContainer>
                {answers[index].options.map((option) => (
                    <Option 
                        key={option.id}
                        correct_option={answers[index].correctAnswer === option.option ? 1 : 0}
                        incorrect_option={option.selected && answers[index].correctAnswer !== option.option ? 1 : 0}
                    >
                        {option.option}
                    </Option>
                ))}
            </OptionsContainer>
            <Line />
        </QuestionsContainer>
    )}

    return (
        <>
            <StyledQuizContainer>
                {questions.map(q => (
                    question(q)
                ))}
                <ResultsSection>
                    <ResultsText>
                        You scored {score}/{questions.length} correct answers
                    </ResultsText>
                    <StyledButton
                        onClick={() => {
                            localStorage.removeItem('answers')
                            window.location.reload()
                        }}
                    >
                        Play again
                    </StyledButton>
                </ResultsSection>
            </StyledQuizContainer>
        </>
    )
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}