// @ts-ignore
import React from 'react';
import Donut from "./Components/Donut";
import ModalChart from "./Components/ModalChart";
import './App.css';

const App: React.FC = () => {
  return (
      <>
       <div className={ 'divChart' }>

        <Donut />
       <ModalChart/>
       </div>

      </>
  )
};

export default App



