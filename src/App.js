import React from 'react';
import './App.css';
import Timer from './Timer';


function App() {
  return (
    <div className="App">
      <div className = "App-container">
        <header className="App-header">
          <h1>
            tushig quits.
          </h1>
          <p className = "App-p">
            <a
              className="App-link"
              href="https://luffy1727.github.io/my-portfolio/"
            >
                Чинтүшиг Очирсүх
            </a> тамхийг орхив. <br/> Энэхүү вэб нь түүнд ирээдүйд хэрэгтэй болох бөгөөд тэр тамхинаас гараад:
          </p>
        </header>
      </div>
      <Timer/>
      <hr
        style={{
            color: '#eebbc3',
            backgroundColor: '#eebbc3',
            height: 5
        }}
      />
      <div className = "App-container">
        <div className = "App-timeline">
          <div className = "App-timeline-div">
            <h1>1 Цаг</h1>
            <p className = "App-text">Зүрхний цохилт багасна</p>
          </div>
          <div className = "App-timeline-div">
            <h1>12 Цаг</h1>
            <p className = "App-text">Цусан дахь carbon monoxide түвшин хэвийн болно.</p>
          </div>
          <div className = "App-timeline-div">
            <h1>14 Хоногоос 3 сар</h1>
            <p className = "App-text">
              Зүрхний шигдээс тусах магадлал багасч, Уушигний үйл ажиллагаа хэвийн дээрдэж эхлэнэ.
            </p>
          </div>
          <div className = "App-timeline-div">
            <h1>1 ээс 9 сар</h1>
            <p className = "App-text">Ханиалгах болон амьсгаа дутагдах нь багасна</p>
          </div>
          <div className = "App-timeline-div">
            <h1>1 Жил</h1>
            <p className = "App-text">Зүрхний титэм судасны өвчин тусах магадлал тамхичнаас 2 дахин бага болно</p>
          </div>
          <div className = "App-timeline-div">
            <h1>5 Жил</h1>
            <p className = "App-text">Саа өвчин тусах магадлал жирийн хүнийхтэй адил болно</p>
          </div>
          <div className = "App-timeline-div">
            <h1>10 Жил</h1>
            <p className = "App-text">Уушигний хорт хавдараар үхэх магадлал тамхичин хүнийхаас 2 дахин бага болсон байна</p>
          </div>
          <div className = "App-timeline-div">
            <h1>15 Жил</h1>
            <p className = "App-text">Зүрхний титэм судасны өвчин тусах магадлал жирийн хүнийхтай адил болсон байна</p>
          </div>
        </div>
      </div>
      <p className="footer-p">
            <small
              ><a
                href="https://www.cdc.gov/tobacco/data_statistics/sgr/2004/posters/20mins/index.htm"
                target="blank"
                >cdc.gov</a
              >
              |
              <a href="https://github.com/luffy1727/tushig-quits" target="blank"
                >GitHub</a
              ></small
            >
          </p>
      
    </div>
  );
}

export default App;
