// import logo from './logo.svg';
import './App.css';
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
        <a href="https://google.com" className="what-link">Что это?</a>
        <h1 className="crr-ok">ЦРР О.К.</h1>
      </div>
      <div className="content">
        <DeliveryForm/>
        <div className="requests">
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
      </div>
    </div>
  );
}

export default App;
