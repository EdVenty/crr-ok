import React from "react";
import styled from 'styled-components';
// import { Button } from "./Button";
import '../stories/deliveryFrom.css';
import { TextBox } from "./TextBox";
import { DropDown } from "./DropDown";
import Button from '@mui/material/Button/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { CircularProgress, TextField } from "@mui/material";
import { store } from "./store";
import { EDisabledReason, setDeliveryDisabledReason, setDeliveryOff, setDeliveryOn } from "./delivery";

const FormDiv = styled.div`
    background: ${({theme}) => theme.colorSecondary};
    font-family: ${({theme}) => theme.fontBase};
    box-shadow: ${({theme}) => theme.boxShadowSecondary};
    padding: ${({theme}) => theme.deliveryFormPadding};
    border-radius: ${({theme}) => theme.borderRadius};
`
const FormElementDiv = styled.div`
    /* margin: ${({theme}) => theme.deliveryFormElementMargin}; */
    margin-bottom: 1em;
`
export interface IDeliveryFormProps{

};
export interface IDeliveryFormState{
    deliveryFrom?: string,
    deliveryTo?: string,
    sending?: boolean,
    deliveryApproved?: boolean,
    disabled?: boolean
};
export interface IDropDownValues{
    value: any,
    label: string
}

const stations: Array<IDropDownValues> = [
    {value: 'tren', label: 'Тренировочная'},
    {value: 'prep', label: 'Преподавательская'},
    {value: 'kab-1', label: 'Кабинет №1'},
    {value: 'kab-5', label: 'Кабинет №5'},
    {value: 'kab-6', label: 'Кабинет №6'},
    {value: 'kab-7', label: 'Кабинет №7'},
];

export class DeliveryForm extends React.PureComponent<IDeliveryFormProps, IDeliveryFormState>{
    constructor(props: IDeliveryFormProps){
        super(props)
        this.state = {
            sending: false,
            deliveryFrom: stations[0].value,
            deliveryTo: stations[1].value
        };
        this.sendDelivery = this.sendDelivery.bind(this);
        this.acceptedDelivery = this.acceptedDelivery.bind(this);
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                disabled: store.getState().deliveryDisabled
            });
        });
        store.dispatch(setDeliveryDisabledReason(EDisabledReason.hallOverlow));
    }
    sendDelivery(){
        this.setState({
            sending: true
        });
        setTimeout(this.acceptedDelivery, 5000);
        document.body.style.backgroundColor = "#c7c7c7"
    }
    acceptedDelivery(){
        this.setState({
            sending: false,
            deliveryApproved: true
        });
        document.body.style.backgroundColor = '#3f9e22';
        setTimeout(() => document.body.style.backgroundColor = '#0e6cc4', 10000);
    }
    render(){
        return <FormDiv className="delivery-form">
            <FormElementDiv>
                <h2>Оформление доставки</h2>
            </FormElementDiv>
            <FormElementDiv>
                <p>Имя</p>
                <TextField
                    disabled={this.state.disabled}
                    fullWidth={true}
                    // values={stations.filter(({value}) => value !== this.state.deliveryFrom)}
                    // onChangeCallback={newValue => this.setState({deliveryTo: newValue?.value})}
                />
            </FormElementDiv>
            <FormElementDiv>
                <p>Пункт отправления</p>
                <DropDown 
                    isDisabled={this.state.disabled}
                    values={stations.filter(({value}) => value !== this.state.deliveryTo)}
                    onChangeCallback={newValue => this.setState({deliveryFrom: newValue?.value})}
                    defaultValue={stations[0]}
                />
            </FormElementDiv>
            <FormElementDiv>
                <p>Пункт получения</p>
                <DropDown 
                    isDisabled={this.state.disabled}
                    values={stations.filter(({value}) => value !== this.state.deliveryFrom)}
                    onChangeCallback={newValue => this.setState({deliveryTo: newValue?.value})}
                    defaultValue={stations[1]}
                />
            </FormElementDiv>
            <Button variant="contained" onClick={() => this.sendDelivery()} disabled={this.state.disabled || this.state.sending}>
                Отправить робота
                {this.state.sending ? <CircularProgress style={{position: 'absolute'}} size='2rem'/> : null}
            </Button>
            {this.state.deliveryApproved ? 
            <div>
                <p>
                    Заявка отправлена. Ожидайте прибытия робота. Подробнее про доставку вы можете прочитать здесь:
                </p>
                <a href="https://google.com/">
                    Как работает доставка?
                </a> 
            </div> : null}
            
        </FormDiv>
    }
}