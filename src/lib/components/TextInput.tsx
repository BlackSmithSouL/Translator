import React, { useEffect } from "react"
import styled from "styled-components"

type InputProps = {
    hasError?: boolean
}

type TextInputProps = {
    value?: string,
    disabled?: boolean,
    hasError?: boolean,
    autoFocus?: boolean,
    placeholder?: string,
    onChangeText?(text: string): void
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({ 
    autoFocus, 
    disabled,
    hasError,
    placeholder,
    value,
    onChangeText
}) => {
    const inputRef = React.createRef<HTMLTextAreaElement>()
    
    useEffect(() => {
        if(!disabled && autoFocus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    
    return (
    <Input 
        value={value}
        disabled={disabled}
        ref={inputRef}
        placeholder={disabled ? undefined : placeholder}
        onChange={event => {
            if (onChangeText) {
                onChangeText(event.target.value)
            }
        }}
        hasError={hasError}
    />
    )
}

const Input = styled.textarea<InputProps>`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border: ${({ theme, hasError }) => hasError ? `1px solid ${theme.colors.error}` : 'none'};
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
`