// import logo from './logo.svg';
import './App.css';
import { AlertMessage } from './stories/AlertMessage';
import { DeliveryForm } from './stories/DeliveryForm';
import { Request } from './stories/Requests';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
      <div className="text">
        {/* <a href="https://google.com" className="what-link">Что это?</a> */}
        <a href="#info"><h1 className="crr-ok">ЦРР О.К.</h1></a>
      </div>
      <div className="content">
        <AlertMessage/>
        <DeliveryForm/>
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
        <div className="container info-card" id='info'>
          <h2>Что такое ЦРР ОК?</h2>
          {/* <p>ЦРР ОК - это система роботов-доставщиков, работающих в Центре Развития Робототехники.</p> */}
          {/* <p>Роботы оснащёны лидаром, камерой и другими датчиками, что делает их нахождение в помещении безопасным.</p>
          <p>На данным момент проходит программа тестирования. Для офромления доставки робота из одного кабинета в другой воспользуйтесь формой выше. Робот автоматически заберёт заказ из пункта отправления и доставит его в пункт получения.</p>
          <p>После получения заказа робот подъезджает к двери пункта отправления и в кабинете активируется Бипер-3000. Робот забирает заказ и процедура повторяется с пунктом получения.</p> */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod iusto soluta, a asperiores voluptates velit delectus eveniet at nisi assumenda quam officia unde, rerum sed odit ullam placeat laborum voluptas?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
