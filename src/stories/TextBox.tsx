import React from "react";
import styled from "styled-components";
import '../stories/textBox.css';

export interface ITextBoxProps{
    width?: 'fit-content' | 'match-parent',
    active?: boolean
};

const TextBoxInputActive = styled.input`
    background: ${({theme}) => theme.colorSecondary};
    color: ${({theme}) => theme.textColor};
    padding: ${({theme}) => theme.inputPadding};
    box-shadow: ${({theme}) => theme.boxShadowSecondary};
    font-family: ${({theme}) => theme.fontBase};
`
const TextBoxInputInactive = styled.input`
    background: ${({theme}) => theme.colorSecondaryInactive};
    color: ${({theme}) => theme.textColorInactive};
    padding: ${({theme}) => theme.inputPadding};
    box-shadow: ${({theme}) => theme.boxShadowSecondary};
    font-family: ${({theme}) => theme.fontBase};
`

export const TextBox = ({
    width = 'match-parent',
    active = true,
    ...props
}: ITextBoxProps) => {
    if (active){
        return <TextBoxInputActive {...props}/>
    }
    else{
        return <TextBoxInputInactive {...props}/>
    }
}