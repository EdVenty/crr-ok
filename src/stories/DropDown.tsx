import React, { useState } from "react";
import styled from "styled-components";
import '../stories/dropDown.css';
import Select, { SingleValue } from 'react-select';

interface IChangeCallback{
    value: string, label: string
};

export interface ITextBoxProps{
    width?: 'fit-content' | 'match-parent',
    values?: Array<IChangeCallback>,
    onChangeCallback?: (newValue: SingleValue<IChangeCallback>) => void,
    defaultValue?: IChangeCallback,
    isDisabled?: boolean
};
// const DropDownInput = styled.input`
//     background: ${({theme}) => theme.colorSecondaryInactive};
//     color: ${({theme}) => theme.textColorInactive};
//     padding: ${({theme}) => theme.inputPadding};
//     box-shadow: ${({theme}) => theme.boxShadowSecondary};
//     font-family: ${({theme}) => theme.fontBase};
// `


export const DropDown = ({
    width = 'match-parent',
    values = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ],
    defaultValue = values[0],
    isDisabled = false,
    onChangeCallback = undefined,
    ...props
}: ITextBoxProps) => {
    return <Select
        isDisabled={isDisabled}
        defaultValue={defaultValue}
        onChange={onChangeCallback}
        options={values}
        {...props}
    />
}