
import createMetaMaskProvider from 'metamask-extension-provider';
import { provider } from 'web3-core';
import Web3 from 'web3';

export class Metamask {
    web3: Web3;

    constructor() {
        const provider = createMetaMaskProvider() as provider;
        console.log(provider);
        this.web3 = new Web3(provider);
    }

    async connect(): Promise<string> {
        const newAccounts = await this.web3.eth.requestAccounts();
        console.log(newAccounts[0]);
        return newAccounts[0];
    }

    async getAccounts(): Promise<string> {
        const newAccounts = await this.web3.eth.getAccounts();
        console.log(newAccounts[0]);
        return newAccounts[0];
    }

    async requestPermissions(): Promise<void> {
        this.web3.eth.accounts.wallet.
    }
}