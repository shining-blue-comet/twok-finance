import BigNumber from "bignumber.js"
import Web3 from "web3";
import { erc20ABI, twokLockTokenAddress, twokAddress, twokABI } from '../../contracts/twok-vault.sol/twokVault';

const web3 = new Web3( window.ethereum )

export const twokVault = {
  namespaced: true,
  state: {
    accountBalance: 0,
    availableEarnings: null,
    currentlyStaked: 0,
    lockToken: null,
    vault: null,
    vaultAddress: twokAddress,
    checkBalances: true
  },
  mutations: {
    setAvailableEarnings( state, availableEarnings ) {
      state.availableEarnings = availableEarnings;
    },

    setTx( state, tx ) {
      state.tx = tx;
    },

    setCurrentlyStakedTokens( state, tokens ) {
      state.currentlyStaked = tokens;
    },

    setAccountBalance( state, balance ) {
      state.accountBalance = balance;
    },

    setLockToken( state, web3 ) {
      state.lockToken = new web3.eth.Contract( erc20ABI, twokLockTokenAddress );
    },

    setVault( state, web3 ) {
      state.vault = new web3.eth.Contract( twokABI, twokAddress )
    },

    setCheckBalances ( state, condition ) {
      state.checkBalances = condition;
    }
  },
  actions: {
    async getAccountBalance( { commit, state, rootState } ) {
      if ( rootState.accountAddress != null ) {
        const userTokenBalance = new BigNumber( await state.lockToken.methods.balanceOf( rootState.accountAddress ).call().catch( (err) => {
          console.log(err);
        } ) )
        
        if ( userTokenBalance.toNumber() != 0 ) {
          commit( "setAccountBalance", ( userTokenBalance.toNumber() / 1e18 ) )
        }        
      }
    },

    async getCurrentlyStaked( { commit, state, rootState } ) {
      let address;
      
      if ( rootState.accountAddress != null ) {
        address = rootState.accountAddress;
      } 
      else {
        return
      }
      
      const amountLocked = BigNumber( await state.vault.methods.amountLocked( address ).call().catch( (err) => {
        console.log(err);
      } ) )
      commit( "setCurrentlyStakedTokens", ( amountLocked.toPrecision() / 1e18 ) )
    },

    async getEarnings( { commit, state, rootState } ) {

      if ( rootState.accountAddress != null ) {

        const amountLocked = BigNumber( await state.vault.methods.amountLocked( rootState.accountAddress ).call().catch( (err) => {
          console.log(err);
        } ) );
        
        if ( !amountLocked ) {
          return
        }

        if ( amountLocked == 0 ) {
          commit( "setAvailableEarnings", 0 );
          return;
        }

        const rewardPerBlock = BigNumber( await state.vault.methods.rewardPerBlock().call() )
        const lastBlockFee = BigNumber( await state.vault.methods.lastBlockFee().call() )
        const totalLiquidityLocked = BigNumber( await state.vault.methods.totalLiquidityLocked().call() )
        let lockTokenFeePrice = BigNumber( await state.vault.methods.lockTokenFeePrice().call() )
        const currentBlock = BigNumber( await web3.eth.getBlockNumber() )
        const blocksPassed = currentBlock.minus( lastBlockFee )
        const feeIn = blocksPassed.times( rewardPerBlock )
        lockTokenFeePrice = feeIn.times( 1e18 ).div( totalLiquidityLocked ).plus( lockTokenFeePrice )
        const lastPriceEarningsExtracted = BigNumber( await state.vault.methods.lastPriceEarningsExtracted( rootState.accountAddress ).call() )
        const lockingTime = BigNumber( await state.vault.methods.lockingTime( rootState.accountAddress ).call() )
        const myPrice = lockTokenFeePrice.minus( lastPriceEarningsExtracted )
        const earnings = amountLocked.times( myPrice ).div( 1e18 )
        const devTreasuryPercentage = BigNumber( await state.vault.methods.calcDevTreasuryPercentage( lockingTime.toString() ).call() )
        const devTreasuryEarnings = earnings.times( devTreasuryPercentage ).div( 1e20 )
        const remaining = earnings.minus( devTreasuryEarnings ).div( 1e18 ).toFixed( 4 )

        commit( "setAvailableEarnings", Number( remaining ) )
      }
    },

    getTxMessage( state ) {
      return state.txMessage;
    },

    getAvailableEarnings( {state} ) {
      return state.availableEarnings;
    },
  }
}