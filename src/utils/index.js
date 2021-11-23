import Web3 from "web3"

import {vaultAbi, mainVault, bnbTestVaultAddress, erc20ABI, mainLockToken, testLockToken} from "./config"
import { web3Enable } from '@polkadot/extension-dapp';

const BigNumber = require('bignumber.js');
const MicroModal = require('micromodal');

let vault = {} // Contract instance
let lockToken = {} // erc20 instance
let scanString
let networkId
let web3 = new Web3(window.ethereum);

const getAccount = async () => {
  // return new Promise( resolve => {
  //   const accs = window.web3.eth.getAccounts()
  //   resolve(accs[0])
  // })
  await web3Enable("twok2.0")
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  
  console.log(accounts);
  return accounts;
}

export const setBinanceScanAndNetworkId = async () => {
  const id = window.ethereum.networkVersion;
  console.log(id);
  networkId = id
  switch (id) {
    case 56:
      scanString = 'https://bscscan.com'
      break
    case 97:
      scanString = 'https://testnet.bscscan.com'
      break
  }
}

export const setup = async () => {
  // Create the contract instance
  if (typeof window.ethereum !== 'undefined') {
    // try {
    //   await window.ethereum.enable()
    // } catch (error) {
    //   console.error('You must approve this dApp to interact with it')
    //}
    const account = await getAccount()
    web3.eth.defaultAccount = account[0]
    console.log(web3.eth.defaultAccount);

    // Important to setup the scan and network before everything
    await setBinanceScanAndNetworkId()
    setupContracts()
    getTokenBalance()
  } else {
    alert('You must have metamask installed to use this dApp')
  }
}

const setupContracts = () => {
  vault = new web3.eth.Contract(
    vaultAbi, // From the config.js file
    networkId == 56 ? mainVault : bnbTestVaultAddress, // From the config.js file
  )
  lockToken = new web3.eth.Contract(
    erc20ABI, // From the config.js file
    networkId == 56 ? mainLockToken : testLockToken, // From the config.js file
  )
  start()
}

const isNumeric = str => {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// 1. Select the inputs and grab the values
// 2. Call the function with those values
// 3. If they are incorrect, show an error message
export const lockLiquidity = async (e, accountBalance, days) => {
  e.preventDefault()
  const tokenAmount = Number( accountBalance )
  console.log(typeof accountBalance);
  if (isNumeric(tokenAmount)) {
    return alert('The token input must be a number')
  }
  const lockingTime = Number( days )
  if (isNumeric(lockingTime)) {
    return alert('The locking time input must be a number between the ranges')
  }
  const tokenPadded = tokenAmount * 1e18;
  const daysInSeconds = lockingTime * 86400;
  // Check allowance
  let currentAllowance
  try {
    console.log(web3.eth.defaultAccount);
    currentAllowance = await lockToken.methods.allowance(web3.eth.defaultAccount, vault._address).call()
  } catch (e) {
    // MicroModal.show('modal-error')
    // return document.querySelector('#modal-error-message').innerHTML = e.message
    console.log(e.message);
  }
  // Approve all tokens
  if (currentAllowance < tokenPadded) {
    try {
      const userTokenBalance = await lockToken.methods.balanceOf(web3.eth.defaultAccount).encodeABI()
      // await lockToken.methods.approve(vault._address, userTokenBalance).send({
      //   from: web3.eth.defaultAccount,
      // })
      var params = [{
        from: web3.eth.defaultAccount,
        to: testLockToken,
        data: userTokenBalance
      }];

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params
      }).then(
        console.log
      )

    } catch (e) {
      // MicroModal.show('modal-error')
      // return document.querySelector('#modal-error-message').innerHTML = e.message
      console.log(e.message);
    }
  }
  try {
    vault.methods.lockLiquidity(tokenPadded.toString(), daysInSeconds.toString()).send({
      from: web3.eth.defaultAccount,
    }, (err) => {
      if (err) {
        // MicroModal.show('modal-error')
        // document.querySelector('#modal-error-message').innerHTML = err.message
        console.log(err.message);
      } else {
        // MicroModal.show('modal-processing')
        // document.querySelector('#check-status').href = `${scanString}/tx/${tx}`
        console.log(err.message);
      }
    })
  } catch (e) {
    console.log('Error', e)
    // MicroModal.show('modal-error')
    // document.querySelector('#modal-error-message').innerHTML = e.message
  }
}

// 1. After getting the available BNB inside the start() function
// earnings = amountLocked[msg.sender].mul(myPrice).div(pricePadding);
// devTreasuryPercentage = calcDevTreasuryPercentage(lockingTime[msg.sender]);
// devTreasuryEarnings = earnings.mul(devTreasuryPercentage).div(1e20);
// 2. Run vault.methods.amountLocked(window.web3.eth.defaultAccount).call() and the rest
// 3. Select #twokEarnings and update it with .innerHTML
export const getEarnings = async () => {
    console.log("testing")
  const amountLocked = BigNumber(await vault.methods.amountLocked(web3.eth.defaultAccount).call())
  if (amountLocked == 0) return
  const rewardPerBlock = BigNumber(await vault.methods.rewardPerBlock().call())
  const lastBlockFee = BigNumber(await vault.methods.lastBlockFee().call())
  const totalLiquidityLocked = BigNumber(await vault.methods.totalLiquidityLocked().call())
  let lockTokenFeePrice = BigNumber(await vault.methods.lockTokenFeePrice().call())
  const currentBlock = BigNumber(await window.web3.eth.getBlockNumber())
  const blocksPassed = currentBlock.minus(lastBlockFee)
  const feeIn = blocksPassed.times(rewardPerBlock)
  lockTokenFeePrice = feeIn.times(1e18).div(totalLiquidityLocked).plus(lockTokenFeePrice)
  const lastPriceEarningsExtracted = BigNumber(await vault.methods.lastPriceEarningsExtracted(web3.eth.defaultAccount).call())
  const lockingTime = BigNumber(await vault.methods.lockingTime(web3.eth.defaultAccount).call())
  const myPrice = lockTokenFeePrice.minus(lastPriceEarningsExtracted)
  const earnings = amountLocked.times(myPrice).div(1e18)
  const devTreasuryPercentage = BigNumber(await vault.methods.calcDevTreasuryPercentage(lockingTime.toString()).call())
  const devTreasuryEarnings = earnings.times(devTreasuryPercentage).div(1e20)
  const remaining = earnings.minus(devTreasuryEarnings).div(1e18).toFixed(4)

 console.log( remaining );
}

export const getTokenBalance = async () => {
  // const userTokenBalance = await lockToken.methods.balanceOf(web3.eth.defaultAccount).encodeABI()
  let balance = 0;
  // var params = [
  //      web3.eth.defaultAccount,
  //     "latest"
  //     ];

  //     window.ethereum.request({
  //       method: 'eth_getBalance',
  //       params
  //     }).then(
  //       console.log
  //     )
  // console.log(userTokenBalance);
  // return userTokenBalance
  // if (web3.eth.defaultAccount) {
  //   balance = await web3.eth.getBalance(web3.eth.defaultAccount).then((res) => {
  //     return res;
  //   })
  //   console.log(balance);
  //   return balance;

  // }

  return balance;
}

export const extractEarnings = async () => {
  try {
    vault.methods.extractEarnings().send({
      from: web3.eth.defaultAccount,
    }, (err, tx) => {
      if (err) {
        MicroModal.show('modal-error')
        document.querySelector('#modal-error-message').innerHTML = err.message
      } else {
        MicroModal.show('modal-processing')
        document.querySelector('#check-status').href = `${scanString}/tx/${tx}`
      }
    })
  } catch (e) {
    console.log('Error', e)
    MicroModal.show('modal-error')
    document.querySelector('#modal-error-message').innerHTML = e.message
  }
}

export const getStaked = async () => {
  try {
    const amountLocked = BigNumber(await vault.methods.amountLocked(web3.eth.defaultAccount).call())
    // document.querySelector('#bnbStaked').innerHTML = amountLocked.div(1e18)
    console.log(amountLocked);
  } catch (e) {
    console.log('Error getting the current stake', e)
  }
}

export const extractStake = async () => {
  try {
    vault.methods.extractLiquidity().send({
      from: web3.eth.defaultAccount,
    }, (err, tx) => {
      if (err) {
        MicroModal.show('modal-error')
        document.querySelector('#modal-error-message').innerHTML = err.message
      } else {
        MicroModal.show('modal-processing')
        document.querySelector('#check-status').href = `${scanString}/tx/${tx}`
      }
    })
  } catch (e) {
    console.log('Error', e)
    MicroModal.show('modal-error')
    document.querySelector('#modal-error-message').innerHTML = e.message
  }
}

const checkStakeIsExtractable = async () => {
  const depositStarts = BigNumber(await vault.methods.depositStarts(web3.eth.defaultAccount).call())
  if (depositStarts <= 0) return
  const lockingTime = BigNumber(await vault.methods.lockingTime(web3.eth.defaultAccount).call())
  const now = BigNumber(Math.floor(Date.now() / 1000))
  const isExtractable = now.minus(depositStarts).gte(lockingTime)
  document.querySelector('#unstake-button').disabled = !isExtractable
}

// Do everything here after setup()
const start = () => {
  getTokenBalance()
  // getEarnings()
  checkStakeIsExtractable()
  // getStaked()
  setInterval(() => {
    // getTokenBalance()
    // getEarnings()
    checkStakeIsExtractable()
    // getStaked()
  }, 1e3)

  // MicroModal.init({
  //   awaitOpenAnimation: true, // [8]
  //   awaitCloseAnimation: true, // [9]
  // })

  // tippy('#bnb-vault-info', {
  //   content: "Stake BNB/TWOK Liquidity Provider tokens, receive TWOK tokens. A fixed amount of TWOK is distributed every block and split between all the stakers in this vault.",
  //   placement: 'right-end',
  // })
  
  // tippy('#unstake-info', {
  //   content: "You must lock your stake for a period of time, between 1 day and 365 days. You won't be able to extract your staked coins until the time has passed. The longer you stake, the larger % of the pool you get.",
  // })
}

// setup()
