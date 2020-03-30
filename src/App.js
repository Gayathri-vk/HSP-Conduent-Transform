import React from 'react';
import './App.css';
// import ContractTable from './components/contractTable';
// import ReactTable from './components/reactTable'
import HspDetail from "./components/hspDetails";

function App() {
  return (
    <div className="App row">
      <div className="col-3">Left Navigation</div>
      <div className="col-9">
        <HspDetail/>
      </div>
    </div>
  );
}
export default App;
