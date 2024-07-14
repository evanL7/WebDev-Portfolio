import React from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import Question from '../components/Question'

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

export function Quiz({ questions }) {

    return (
        <>
            <StyledQuizContainer>
                {questions.map((question, i) => (
                    <Question key={nanoid()} question={question} />
                
                ))}
                <StyledButton>Check Answers</StyledButton>
            </StyledQuizContainer>
        </>
    )
}

export default Quiz