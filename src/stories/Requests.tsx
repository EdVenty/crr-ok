import React from "react";
import './requests.css';

interface IProps {
    from: string,
    to: string,
    clientName: string,
    fromMe?: boolean,
    interactive?: boolean,
    status: 'waiting' | 'toSender' | 'toGetter'
}
interface IState {
    status: 'waiting' | 'toSender' | 'toGetter'
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
        }
        return this.state.status;
    }
    render() {
        return <div className="delivery-request-container">
            <div className={`delivery-request ${this.props.fromMe ? 'delivery-request-my' : 'delivery-request-other'}`}>
                <h4 className="delivery-request-client">{this.props.clientName}</h4>
                <div className="delivery-request-points">
                    <p>{this.props.from}</p>
                    <img src="https://img.icons8.com/ios/100/000000/van.png" className="delivery-icon"/>
                    <p>{this.props.to}</p>
                </div>
                <p className="delivery-request-status">{this.evalStatus()}</p>
            </div>
        </div>
    }
}