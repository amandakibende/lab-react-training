import React from 'react';
import IdCard from './Components/IdCard';
import './App.css';
import "./style/IdCard.css";
import Greetings from './Components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <IdCard
       lastName='Doe'
       firstName='John'
       gender='male'
       height={178}
       birth={new Date("1992-07-14").toLocaleDateString("fr")}
       picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </header>
     <Greetings lang="de">Biggy</Greetings>
     <Greetings lang="en">Tupac</Greetings>
     

    
    </div>
  );
}

export default App;
