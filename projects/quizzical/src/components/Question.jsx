import React from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const QuestionText = styled.p`
    color: #293264;
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    font-weight: bold;
`

const OptionsContainer = styled.div`
    display: flex;
`
const Option = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4D5B9E;
    border-radius: 0.5rem;
    font-size: 0.64rem;
    font-family: 'Inter', sans-serif;
    height: 1.291rem;
    width: 4.125rem;
    margin-right: 0.8rem;
`

const Line = styled.hr`
    border: 0.5px solid #DBDEF0;
    width: 20rem; // 100%;
    margin: 0.8rem 0 0 0;
`

export function Question() {

    const options = ['Paris', 'London', 'Berlin', 'Madrid']

    function handleClick() {
        console.log(`Option clicked`)
    }

    return (
        <>
            <QuestionText>What is the capital of France?</QuestionText>
            <OptionsContainer>
                {options.map((option, i) => (
                    <Option key={nanoid()} onClick={handleClick} >{option}</Option>
                ))}
            </OptionsContainer>
            <Line />
        </>
    )
}

export default Question