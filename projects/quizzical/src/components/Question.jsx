import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
    border: 1px solid #4D5B9E;
    border-radius: 0.5rem;
    font-size: 0.64rem;
    font-family: 'Inter', sans-serif;
    height: 1.291rem;
    width: fit-content;
    padding: 0.1rem 1rem;
    margin-right: 0.8rem;
    white-space: nowrap;

    ${props => props.clicked && `
        background-color: #D6DBF5;
        border: none;
    `}
`
const Line = styled.hr`
    border: 0.5px solid #D6DBF5;
    width: 100%;
    margin: 0.8rem 0 0 0;
`

export function Question({ question, questionCallback, }) {
    const [clickedOption, setClickedOption] = useState(null)
    const [options, setOptions] = useState({ id: question.id, options: [], correct: false, correctAnswer: question.correct_answer })

    useEffect(() => {
        let optionsArray
        if (question.type === 'boolean') {
            optionsArray = [
                { option: 'True', selected: false },
                { option: 'False', selected: false },
            ]
        } else {
            optionsArray = [
                { option: question.incorrect_answers[0], selected: false },
                { option: question.incorrect_answers[1], selected: false },
                { option: question.incorrect_answers[2], selected: false },
                { option: question.correct_answer, selected: false },
            ]
            shuffleArray(optionsArray)
        }
        setOptions(prevState => ({ ...prevState, options: optionsArray }))
    }, [])

    useEffect(() => {
        if (clickedOption !== null) {
            setOptions(prevState => ({ ...prevState, correct: options.options[clickedOption].option === question.correct_answer }))

            questionCallback({ ...options, correct: options.options[clickedOption].option === question.correct_answer })
        }
    }, [clickedOption])

    function handleClick(index) {
        setClickedOption(index)
        setOptions(prevState => ({ ...prevState, options: options.options.map((option, i) => {
            if (i === index) {
                return { ...option, selected: true }
            } else {
                return { ...option, selected: false }
            }
        })}))
    }

    return (
        <>
            <QuestionsContainer>
                <CategoryText>{question.category} — {capitalizeFirstLetter(question.difficulty)}</CategoryText>
                <QuestionText>{question.question}</QuestionText>
                <OptionsContainer>
                    {options.options.map((option, i) => (
                        <Option 
                            key={option.id}
                            clicked={clickedOption === i ? 1 : 0}
                            onClick={() => handleClick(i)}
                        >
                            {option.option}
                        </Option>
                    ))}
                </OptionsContainer>
                <Line />
            </QuestionsContainer>
        </>
    )
}

/* Source: https://stackoverflow.com/a/12646864 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Question