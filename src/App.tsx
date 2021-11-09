// import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';
import { AlertMessage } from './stories/AlertMessage';
import { EDisabledReason, setDeliveryDisabledReason, setDeliveryOn, setDeliveryOff } from './stories/delivery';
import { DeliveryForm } from './stories/DeliveryForm';
import { DropDown } from './stories/DropDown';
import { MyOrder } from './stories/MyOrder';
import { Request } from './stories/Requests';
import { store } from './stories/store';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Account } from './stories/Account';


function App() {
  return (
    <div className="App">
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
      <Account/>
      <div className="text">
        {/* <a href="https://google.com" className="what-link">Что это?</a> */}
        <a href="#info"><h1 className="crr-ok">ЦРР О.К.</h1></a>
      </div>
      <MyOrder/>
      <div className="content">
        <AlertMessage/>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Доставка</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DeliveryForm/>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Текущие заказы</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="container requests">
              <h2>Текущие заказы</h2>
              <Request 
                from="Кабинет №7"
                to="Тренировочная"
                clientName="Amogus"
                status="toGetter"
              />
              <Request 
                from="Тренировочная"
                to="Кабинет №1"
                clientName="Edventy"
                status="waiting"
                fromMe={true}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Что такое ЦРР ОК?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="container info-card" id='info'>
              <h2>Что такое ЦРР ОК?</h2>
              {/* <p>ЦРР ОК - это система роботов-доставщиков, работающих в Центре Развития Робототехники.</p> */}
              {/* <p>Роботы оснащёны лидаром, камерой и другими датчиками, что делает их нахождение в помещении безопасным.</p>
              <p>На данным момент проходит программа тестирования. Для офромления доставки робота из одного кабинета в другой воспользуйтесь формой выше. Робот автоматически заберёт заказ из пункта отправления и доставит его в пункт получения.</p>
              <p>После получения заказа робот подъезджает к двери пункта отправления и в кабинете активируется Бипер-3000. Робот забирает заказ и процедура повторяется с пунктом получения.</p> */}
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod iusto soluta, a asperiores voluptates velit delectus eveniet at nisi assumenda quam officia unde, rerum sed odit ullam placeat laborum voluptas?</p>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <div className="container test-box">
          [ТЕСТ] Алерт-месседж
          <DropDown 
              values={[
                  {value: EDisabledReason.unknown, label: 'Неизвестно'},
                  {value: EDisabledReason.robotBroken, label: 'Тех-работы'},
                  {value: EDisabledReason.hallOverlow, label: 'Холл заполнен'}
              ]}
              onChangeCallback={newValue => store.dispatch(setDeliveryDisabledReason(newValue?.value))}
              defaultValue={{value: EDisabledReason.hallOverlow, label: 'Холл заполнен'}}
          />
          <Button variant="contained" onClick={() => store.dispatch(store.getState().deliveryDisabled ? setDeliveryOn() : setDeliveryOff())}>
              [ТЕСТ] Переключить возможность доставки
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
