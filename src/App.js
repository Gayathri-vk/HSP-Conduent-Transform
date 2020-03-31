import React from 'react';
import './App.css';
import SubHeader from './components/subHeader';
import HspDetail from "./components/hspDetails";


const breadCrumItems = ['Provider','Contracts']
function App() {
  return (
    <div className="App row">
      <div className="col-3">Left Navigation</div>
      <div className="col-9">        
        {/* <HspDetail/> */}
        <SubHeader breadcrums = {breadCrumItems}/>
      </div>
    </div>
  );
}
export default App;
