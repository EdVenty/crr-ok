import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';
import { Action, createStore } from 'redux';
import { EDisabledReason } from './delivery';

export interface IStore{
    deliveryDisabled?: boolean,
    deliveryDisabledReason?: EDisabledReason
};

export const reducer = (state: IStore = {}, action: PayloadAction<any>) => {
    switch(action.type){
        case 'DELIVERY_OFF':
            state.deliveryDisabled = true;
            break;
        case 'DELIVERY_ON':
            state.deliveryDisabled = false;
            break;
        case 'DELIVERY_DISABLED_RESON':
            state.deliveryDisabledReason = action.payload
    }
    console.log(state);
    return state;
};
export const store = createStore(reducer);