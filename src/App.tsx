import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Команду уже нашел. <br />


          Каких целей хочу достичь: <br />
           - лучше разбираться в современном подходе при разработке UI <br />
          Какими технологиями хочу овладеть: <br />
           - ReactJS <br />
          Какими технологиями уже владеете: <br />
           - Java, JS, SQL etc )<br />
          Расскажите о себе и о своем опыте: <br />
           - 15 лет в разработке, бекенд разработчик, тимлид, консультант, руководитель. <br />
           
           Хочу понять, как лучше толстый клиент на тонкий перетащить. <br /> 
           На текущий момент в проекте используется JavaFX (WebView) + классический JS+HTML+CSS. <br />
           WebView накладывает ряд ограничений, так как технология древняя, <br />
           на текущий момент особо к нему фреймворки не поподключать. <br />
           Интересно посмотреть как более оптимально это можно переделать  <br />
           в современном браузере + лучше понимать о чем говорят коллеги с UI. <br />
        </p>
      </header>
    </div>
  );
}

export default App;
