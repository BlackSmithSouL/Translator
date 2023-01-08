import React from "react"
import styled from "styled-components"
import { Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from "../../lib/components"

export const TranslatorScreen: React.FunctionComponent = () => (
    <Container>
        <TranslateContainer>
        <InputContainer>
            <SelectLanguage />
            <TextInput />
            <LoaderContainer>
                <Loader />
            </LoaderContainer>
            <InputFooter>
                <Confidence />
                <TextCounter />
            </InputFooter>
        </InputContainer>
        <ExchangeLanguage />
        <InputContainer>
        <SelectLanguage />
            <TextInput />
            <LoaderContainer>
                <Loader />
            </LoaderContainer>
        </InputContainer>
        </TranslateContainer>
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography};
`

const TranslateContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LoaderContainer = styled.div`
    padding: 5px 10px;
`

const InputFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`