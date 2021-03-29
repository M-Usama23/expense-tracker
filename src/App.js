import React from 'react';
import './App.css';

// import context 
import { TransactionProvider } from './context/GlobalState'

// import components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'


// import Child from './child';
// import {Contex} from './transContext'

function App() {
  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
        {/* <Contex /> */}

      </div>
    </TransactionProvider>
  );
}

export default App;
