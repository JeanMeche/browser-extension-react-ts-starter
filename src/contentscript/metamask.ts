import MetaMaskOnboarding from '@metamask/onboarding';

const forwarderOrigin = 'localhost';

export class MetaMask {
  accounts: [] = [];
  ethereum;

  constructor(eth) {
    this.ethereum = eth;
  }

  public installMetaMask = () => {
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
  };

  public connect = async () => {
    try {
      const newAccounts = await this.ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.handleNewAccounts(newAccounts);
      console.log('accounts', newAccounts);
    } catch (error) {
      console.error(error);
    }
  };

  private handleNewAccounts(newAccounts) {
    this.accounts = newAccounts;
  }
}
