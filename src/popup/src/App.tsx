import React, { useEffect, useState } from 'react';
import './App.css';
import { Metamask } from './metamask';

function App() {
  const [metamask, setMetamask] = useState<Metamask>();
  const [account, setAccount] = useState<string>();

  useEffect(() => {
    setMetamask(new Metamask());
  }, []);

  return (
    <main className="container-fluid">
      <header>
        <div id="logo-container">
          <h1 id="logo-text" className="text-center">
            POC
          </h1>
        </div>
      </header>
      <section>
        <h3 className="card-title">Status</h3>

        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <p className="info-text alert alert-primary">Network:</p>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <p className="info-text alert alert-secondary">ChainId:</p>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <p className="info-text alert alert-success">Accounts: {account}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Actions</h4>

                <button
                  className="btn btn-primary btn-lg btn-block mb-3"
                  id="connectButton"
                  onClick={() =>
                    metamask?.connect().then((acc) => setAccount(acc))
                  }
                >
                  Connect
                </button>

                <button
                  className="btn btn-primary btn-lg btn-block mb-3"
                  id="getAccounts"
                  onClick={() =>
                    metamask?.getAccounts().then((acc) => setAccount(acc))
                  }
                >
                  eth_accounts
                </button>

                <p className="info-text alert alert-secondary">
                  eth_accounts result: {account}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Permissions Actions</h4>

                <button
                  className="btn btn-primary btn-lg btn-block mb-3"
                  id="requestPermissions"
                >
                  Request Permissions
                </button>

                <button
                  className="btn btn-primary btn-lg btn-block mb-3"
                  id="getPermissions"
                >
                  Get Permissions
                </button>

                <p className="info-text alert alert-secondary">
                  Permissions result: <span id="permissionsResult"></span>
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
