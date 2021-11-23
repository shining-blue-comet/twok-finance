import WalletConnectProvider from '@walletconnect/web3-provider';
import Torus from '@toruslabs/torus-embed';
import Authereum from 'authereum';


  import Fortmatic from 'fortmatic';
// eslint-disable-next-line global-require
const { USDT_ADDRESS } = process.env.NODE_ENV === 'production'
  ? require('./constants')
  : require('./constants.dev');
// 
const providerOptions = {
  //https://docs.walletconnect.org/
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed.binance.org/'
      },
      network: 'binance',
      chainId: 56,
      infuraId: 'a7f2fa0355d74ff0976dec489b84b3c9',
    },
  },
    // https://github.com/torusresearch/torus-embed#readme
  torus: {
    package: Torus,
  },
    // https://docs.fortmatic.com/
  fortmatic: {
    package: Fortmatic,
    options: {
      key: 'xxxxxxxxxx', // TODO key
    },
  },
    // https://docs.authereum.com/integration
  authereum: {
    package: Authereum,
  },
  metmask: {
    
  }
};

export { USDT_ADDRESS, providerOptions };
