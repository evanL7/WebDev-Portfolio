import React from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const QuestionsContainer = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 50%;
`
const QuestionText = styled.p`
    color: #293264;
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    font-weight: bold;
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
`
const Line = styled.hr`
    border: 0.5px solid #DBDEF0;
    width: 100%;
    margin: 0.8rem 0 0 0;
`

export function Question({ question }) {

    let options = []
    if (question.type === 'boolean') {
        options = ['True', 'False']
    } else {
        options = [...question.incorrect_answers, question.correct_answer]
    }

    function handleClick() {
        console.log(`Option clicked`)
    }

    return (
        <>
            <QuestionsContainer>
                <QuestionText>{question.question}</QuestionText>
                <OptionsContainer>
                    {options.map((option, i) => (
                        <Option key={nanoid()} onClick={handleClick} >{option}</Option>
                    ))}
                </OptionsContainer>
                <Line />
            </QuestionsContainer>
        </>
    )
}

export default Question