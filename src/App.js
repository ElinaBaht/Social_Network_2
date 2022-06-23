import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Sidebar, Profile, Header, Dialogs, News, Music, Settings} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="network">
        <div className="network__header">
          <Header/>
        </div>
        <div className="network__container">
          <div className="network__sidebar">
              <Sidebar/>
          </div>
          
            <div className="network__content">
              <Routes>
                <Route path='/profile' element = {<Profile/>}/>
                <Route path='/dialogs' element = {<Dialogs
                items = {[
                  {
                    id: 1,
                    name: "Dima"
                  },
                  {
                    id: 2,
                    name: "Maria"
                  },
                  {
                    id: 3,
                    name: "Aleksandr"
                  },
                  {
                    id: 4,
                    name: "Regina"
                  }

                ]}
                messages = {[
                  {
                    id: 1,
                    message: 'Hello'
                  },
                  {
                    id: 2,
                    message: 'How are you'
                  },
                  {
                    id: 3,
                    message: 'You are cool'
                  },
                  {
                    id: 4,
                    message: 'I am frontend developer'
                  },
                  {
                    id: 5,
                    message: 'I will be programmer'
                  }
                ]}/>}/>
                <Route path='/news' element = {<News/>}/>
                <Route path='/music' element = {<Music/>}/>
                <Route path='/settings' element = {<Settings/>}/>
              </Routes>
            </div>  
        </div>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
