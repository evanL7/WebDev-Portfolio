import React from 'react'
import styled from 'styled-components'

const StartMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #F5F7FB;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    margin: 0;
`
const Title = styled.h1`
    font-size: 2rem;
    margin: 0 0 1rem 0;
`
const Description = styled.p`
    color: #293264;
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 2rem 0;
`
const StyledButton = styled.button`
    background-color: #4D5B9E;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 0.938rem;
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    height: 3.25rem;
    width: 12.063rem;

    &:hover {
        background-color: #3B4A7E;
    }
`

export function StartMenu({ switchViewCallback }) {

    return (
        <StartMenuContainer>
            <Title>Quizzical</Title>
            <Description>Test your knowledge!</Description>
            <StyledButton onClick={switchViewCallback}>Start quiz</StyledButton>
        </StartMenuContainer>
    )
}

export default StartMenu