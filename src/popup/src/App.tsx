import React from 'react';
import './App.css';
import { Command } from '../../shared/api';

const sendMessage = (c: Command) => {
  console.log('sending message');
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id!, c);
  });
};

function App() {
  return (
    <main className='container-fluid'>
      <header>
        <div id='logo-container'>
          <h1 id='logo-text' className='text-center'>
            POC
          </h1>
        </div>
      </header>
      <section>
        <h3 className='card-title'>Status</h3>

        <div className='row'>
          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'>
            <p className='info-text alert alert-primary'>
              Network: <span id='network'></span>
            </p>
          </div>

          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'>
            <p className='info-text alert alert-secondary'>
              ChainId: <span id='chainId'></span>
            </p>
          </div>

          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'>
            <p className='info-text alert alert-success'>
              Accounts: <span id='accounts'></span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Basic Actions</h4>

                <button
                  className='btn btn-primary btn-lg btn-block mb-3'
                  id='connectButton'
                  onClick={() => sendMessage(Command.Connect)}
                >
                  Connect 2
                </button>

                <button
                  className='btn btn-primary btn-lg btn-block mb-3'
                  id='getAccounts'
                >
                  eth_accounts
                </button>

                <p className='info-text alert alert-secondary'>
                  eth_accounts result: <span id='getAccountsResult'></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
