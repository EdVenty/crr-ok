import '../stories/button.css';
import React from 'react';
// import { styled } from '@storybook/theming';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
    background: ${({theme}) => theme.colorPrimary};
    color: ${({theme}) => theme.textColor};
    padding: ${({theme}) => theme.buttonPaddingY}em ${({theme}) => theme.buttonPaddingX}em;
    box-shadow: ${({theme}) => theme.boxShadowPrimary};
    font-family: ${({theme}) => theme.fontBase};
    border-radius: ${({theme}) => theme.borderRadius};
`
const ButtonSecondary = styled.button`
    background: ${({theme}) => theme.colorSecondary};
    color: ${({theme}) => theme.textColor};
    padding: ${({theme}) => theme.buttonPaddingY}em ${({theme}) => theme.buttonPaddingX}em;
    box-shadow: ${({theme}) => theme.boxShadowSecondary};
    font-family: ${({theme}) => theme.fontBase};
    border-radius: ${({theme}) => theme.borderRadius};
`
export interface IButtonProps{
    type?: 'primary' | 'secondary';
    label?: string;
    width?: 'fit-content' | 'match-parent'
    onClick?: () => void;
};


export const Button = ({
    type='primary',
    label='Button',
    width='fit-content',
    onClick,
    ...props
}: IButtonProps) => {
    switch(type){
        case 'primary':
            return <ButtonPrimary onClick={onClick} className={width === 'match-parent' ? 'match-parent' : 'fit-content'}>
                {label}
            </ButtonPrimary>
        case 'secondary':
            return <ButtonSecondary onClick={onClick} className={width === 'match-parent' ? 'match-parent' : 'fit-content'}>
                {label}
            </ButtonSecondary>
    }
}