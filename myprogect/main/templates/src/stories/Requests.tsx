import React from "react";
import './requests.css';

interface IProps {
    from: string,
    to: string,
    clientName: string,
    fromMe?: boolean,
    interactive?: boolean,
    status: 'waiting' | 'toSender' | 'toGetter' | 'openGetter' | 'openSender',
    prefix?: string
}
interface IState {
    status: 'waiting' | 'toSender' | 'toGetter' | 'openGetter' | 'openSender'
}

export class Request extends React.PureComponent<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            status: this.props.status
        };
    }
    evalStatus(){
        switch(this.state.status){
            case 'waiting':
                return "ждёт";
            case 'toGetter':
                return "в пути к получателю";
            case 'toSender':
                return "в пути к отправителю"; 
            case 'openGetter':
                return 'прибыл к получателю';
            case 'openSender':
                return 'прибыл к отправителю';
        }
        return this.state.status;
    }
    render() {
        return <div className={`delivery-request-container ${this.props.prefix}-delivery-request-container`}>
            <div className={`delivery-request ${this.props.prefix}-delivery-request ${this.props.fromMe ? 'delivery-request-my ' + this.props.prefix + '-delivery-request-my' : 'delivery-request-other ' + this.props.prefix + '-delivery-request-other'}`}>
                <h4 className={`delivery-request-client ${this.props.prefix}-delivery-request-client`}>{this.props.clientName}</h4>
                <div className={`delivery-request-points ${this.props.prefix}-delivery-request-points`}>
                    <p>{this.props.from}</p>
                    <img src="https://img.icons8.com/ios/100/000000/van.png" className="delivery-icon" alt="van"/>
                    <p>{this.props.to}</p>
                </div>
                <p className={`delivery-request-status ${this.props.prefix}-delivery-request-status`}>{this.evalStatus()}</p>
            </div>
        </div>
    }
}