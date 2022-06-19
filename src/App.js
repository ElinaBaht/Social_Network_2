import React from "react";
import { Sidebar, Profile, Header} from './components'

function App() {
  return (
    <div className="network">
      <div className="network__header">
        <Header/>
      </div>
      <div className="network__container">
        <div className="network__sidebar">
            <Sidebar items={[
            {
              icon: <svg
                width='18'
                height='18'
                viewBox="0 0 64 64">
                <path d="M60,4H4C1.7908,4,0,5.7909002,0,8v48c0,2.2090988,1.7908,4,4,4h56c2.2092018,0,4-1.7909012,4-4V8
                C64,5.7909002,62.2092018,4,60,4z M62,56c0,1.1027985-0.8972015,2-2,2H4c-1.1027999,0-2-0.8972015-2-2V8
                c0-1.1027999,0.8972001-2,2-2h56c1.1027985,0,2,0.8972001,2,2V56z"/>
                <path d="M32,32c4.4183006,0,8-4.0294991,8-9c0-4.9706001-3.5816994-9-8-9s-8,4.0293999-8,9C24,27.9705009,27.5816994,32,32,32z
                  M32,16c3.3083992,0,6,3.1401997,6,7s-2.6916008,7-6,7s-6-3.1401997-6-7S28.6916008,16,32,16z"/>
                <path d="M31.9999008,33C23.1634007,33,16,40.3828011,16,49.4898987C16,50.6955986,16.1333008,51.8679008,16.3715992,53h31.2567997
                  C47.8666992,51.8679008,48,50.6955986,48,49.4898987C48,40.3828011,40.8364983,33,31.9999008,33z M45.9208984,51H18.0790997
                  C18.0265007,50.4934998,18,49.9889984,18,49.4898987C18,41.5001984,24.2803001,35,31.9999008,35
                  C39.7196007,35,46,41.5001984,46,49.4898987C46,49.9889984,45.9734993,50.4934998,45.9208984,51z"/>
                </svg>,
              name: 'Profile',
              active: true
              
            } 
            ]}/>
            <Sidebar items={[
            {
              name: 'Dialogs'
              
            },
            {
              name: 'Music'
            },
            {
              name: 'News'
            },
            {
              name: 'Settings'
            }
            ]}/>
        </div>
        <div className="network__content">
            <Profile/>
      </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
