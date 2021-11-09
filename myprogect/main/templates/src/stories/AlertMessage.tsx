import React from 'react';
import { EDisabledReason, evalDisabledReason } from './delivery';
import { store } from './store';

export interface IAlertMessageProps{

};
export interface IAlertMessageState{
    reason?: EDisabledReason,
    deliveryDisabled?: boolean
};

export class AlertMessage extends React.PureComponent<IAlertMessageProps, IAlertMessageState>{
    constructor(props: IAlertMessageProps){
        super(props);
        this.state = {
            reason: store.getState().deliveryDisabledReason,
            deliveryDisabled: store.getState().deliveryDisabled
        }
    }
    componentDidMount(){
        store.subscribe(() => 
            this.setState({ 
                reason: store.getState().deliveryDisabledReason,
                deliveryDisabled: store.getState().deliveryDisabled
            })
        );
    }
    render() {
        if(this.state.deliveryDisabled){
            return <div className="alert-card container">
                {evalDisabledReason(this.state.reason ?? EDisabledReason.none)}
            </div>
        }
        return null;
    }
}