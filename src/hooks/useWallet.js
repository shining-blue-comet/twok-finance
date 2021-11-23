import {
  ref, reactive, toRefs,
} from 'vue';
import { utils } from 'web3';
// import { getChainData } from '@/web3/tools';
// import { providerOptions } from '@/web3/config';
// import WalletConnect from "@walletconnect/client";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3 from 'web3';

const INITIAL_STATE = {
  web3: null,
  provider: null,
  userAddress: '',
  connected: false,
  chainId: 1,
  networkId: 1,
};
export default function UseWallet() {
  const walletObj = reactive({ ...INITIAL_STATE });
  const fetching = ref(false);
  const assets = ref(0);
  let web3;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "a7f2fa0355d74ff0976dec489b84b3c9",
        rpc: {
          56: 'https://bsc-dataseed1.defibit.io/'
        },
        chainId: 56
      }
    }
  };
  
  //https://github.com/Web3Modal/web3modal#web3modal
  const web3Modal = new Web3Modal({
    theme: "dark",
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });

  const resetApp = async () => {
    const { web3 } = walletObj;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    web3Modal.clearCachedProvider();
    assets.value = 0;
    Object.keys(INITIAL_STATE).forEach((e) => {
      walletObj[e] = INITIAL_STATE[e];
    });
    this.$forceUpdate();
  };
  const getUserBalance = () => walletObj.web3.eth
    .getBalance(walletObj.userAddress)
    .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0));

  const getAccountAssets = async () => {
    fetching.value = true;
    // get account balances

    assets.value = await getUserBalance();
  };
  // const subscribeProvider = async (provider) => {
  //   if (!provider.on) {
  //     return;
  //   }
  //   provider.on('close', () => resetApp());
  //   provider.on('accountsChanged', async (accounts) => {
  //     // eslint-disable-next-line prefer-destructuring
  //     walletObj.userAddress = accounts[0];
  //     await getAccountAssets();
  //   });
  //   provider.on('chainChanged', async (chainId) => {
  //     console.log('333', chainId);
  //     const networkId = await walletObj?.web3?.eth?.net.getId();
  //     walletObj.chainId = chainId;
  //     walletObj.networkId = networkId;
  //     await getAccountAssets();
  //   });
  // };

  /**
  * Connect wallet button pressed.
  */

  const onConnect = async () => {
    
    try {
      // console.log("Opening a dialog", web3Modal.userOptions[1].onClick());
      // web3Modal.clearCachedProvider()
      try {
        var provider = await web3Modal.connect();
        // provider.disconnect()
        var userOption = await web3Modal.userOptions[1].onClick()

        console.log(provider);

        setTimeout(() => {
          
          console.log(userOption);
        }, 1000);

        // await subscribeProvider(provider);        
        return provider;

      } catch(e) {
        console.log("Could not get a wallet connection", e);
        return;
      }

      // const networkId = await web3.eth.net.getId();
  
      // const chainId = await web3.eth.getChainId(); // 坑逼 注意版本 chainId
  
      // console.log(chainId);
  
      // walletObj.userAddress = address;
      // walletObj.chainId = chainId;
      // walletObj.networkId = networkId;
      // await getAccountAssets();
    } catch (error) {
        console.log(error);
        return
    }
  };

  /**
  * Disconnect wallet button pressed.
  */
  const onDisconnect = async (web3) => {

    console.log("Killing the wallet connection", web3);

    // TODO: Which providers have close method?
    // if(walletObj.provider.close) {
    //   await walletObj.provider.close();

    //   // If the cached provider is not cleared,
    //   // WalletConnect will default to the existing session
    //   // and does not allow to re-scan the QR code with a new wallet.
    //   // Depending on your use case you may want or want not his behavir.
    //   await web3Modal.clearCachedProvider();
    //   walletObj.provider = null;
    // }

    // walletObj.web3.selectedAccount = null;

    // Set the UI back to the initial state
    // document.querySelector("#prepare").style.display = "block";
    // document.querySelector("#connected").style.display = "none";
  }

  return {
    ...toRefs(walletObj),
    fetching,
    assets,
    resetApp,
    getAccountAssets,
    //
    web3Modal,
    // methods
    onConnect,
    onDisconnect,
    web3
  };
}
