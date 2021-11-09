import React from 'react';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Request } from './Requests';
import { Button } from '@mui/material';

interface IState{
    openAccept: boolean;
    openRate: boolean;
};
interface IProps{

};

export class MyOrder extends React.PureComponent<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            openAccept: false,
            openRate: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpenAccept = this.handleClickOpenAccept.bind(this);
        this.handleClickOpenRate = this.handleClickOpenRate.bind(this);
    }
    handleClickOpenAccept(){
        this.setState({openAccept: true,
        openRate: false});
    };

    handleClickOpenRate(){
        this.setState({openRate: true,
        openAccept: false});
    };

    handleClose(){
        this.setState({openAccept: false, openRate: false});
    };
    render(){
        return <div className="container current-request-container">
        <h3>Ваш заказ</h3>
        <Request 
          from="Тренировочная"
          to="Кабинет №1"
          clientName="Я"
          status="openGetter"
          fromMe={true}
          prefix='current'
        />
        <Button onClick={this.handleClickOpenAccept}>Открыть крышку</Button>
          <Dialog
          open={this.state.openAccept}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Вы уверены?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Вы точно хотите открыть крышку робота?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Rating name="half-rating" defaultValue={0} precision={0.5} /> */}
            <Button onClick={this.handleClose}>Отмена</Button>
            <Button onClick={this.handleClickOpenRate}>Открыть</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openRate}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Спасибо за заказ!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Пожалуйста, оцените доставку :)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Rating name="half-rating" defaultValue={0} precision={0.5} /> */}
            <Rating name="half-rating" defaultValue={0} precision={0.5} />
            <Button onClick={this.handleClose}>Ок</Button>
          </DialogActions>
        </Dialog>
      </div>;
    }
}