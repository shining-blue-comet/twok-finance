import { createStore } from 'vuex'

import { dxmBnbLp } from './modules/dxm-bnb-lp'
import { cesslp } from './modules/cesslp'
import { twokBnbLp } from './modules/twok-bnb-lp'
import { twokVault } from './modules/twok-vault'
import { twokfBnbfegLp } from './modules/twok-bnb-fegexlp'
import { cess4cess } from './modules/cess4cess'
import { dxm4cess } from './modules/dxm4cess'
import { cess4dxm } from './modules/cess4dxm'
import { twokUsdApeLp } from './modules/twok-busd-apelp'
import web3Modal from './modules/web3Modal'

export default createStore({
    state: {
        provider: null,
        accountAddress: '',
        connected: false,
        chainId: 0x38,
        networkId: 1,
        errorMessage: '',
        tx: '',
        web3: null,
        tempVariable: null,
        transactionLink: null,
    },
    mutations: {
        setAccountAddress(state, address) {
            state.accountAddress = address;
        },

        setProvider(state, provider) {
            state.provider = provider
        },

        setInputErrorMessage(state, message) {
            state.errorMessage = message;
        },

        setTx( state, tx ) {
            state.tx = tx;
        },

        setWeb3( state, web3 ) {
            state.web3 = web3;
        },
        
        setTempVariable( state, tempVariable ) {
            state.tempVariable = tempVariable;
        },
        
        setTransactionLink ( state, txLink ) {
            state.transactionLink = txLink;
        }
    },
    actions: {},
    modules: {
        dxmBnbLp,
        twokBnbLp,
        twokfBnbfegLp,
        cess4cess,
        cess4dxm,
        dxm4cess,
        cesslp,
        twokVault,
        twokUsdApeLp,
        web3Modal
    },
})
