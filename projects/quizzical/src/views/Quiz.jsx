import React from 'react'
import styled from 'styled-components'
import Question from '../components/Question'

const StyledQuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #F5F7FB;
`

export function Quiz() {



    return (
        <>
            <StyledQuizContainer>

                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </StyledQuizContainer>
        </>
    )
}

export default Quiz