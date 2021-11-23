<template>
  <section class="kk-section">
    <div class="kk-section-top">
      <div class="dynCont left">
        <span class="kk-h5 ma-0">1 Item</span>
      </div>
    </div>
        <ul style="padding: 8px 24px;">
          <li class="noBullet">⚪️ 2K TreasuryBox Trigger Info:</li>
          <li style="text-align: left; padding: 4px;">- Hold atleast 0.5 Twok to press the trigger.</li>
          <li style="text-align: left; padding: 4px;">- 5% of the total amount of Rewards in the TreasuryBox is transferred by the trigger mechanism.</li>
          <li style="text-align: left; padding: 4px;">- 95% of this 5% get shared between all stakers according to their stake in the TreasuryBox</li>
          <li style="text-align: left; padding: 4px;">- The trigger activator get's 5% of the 5%.</li>
          <li style="text-align: left; padding: 4px;">- Trigger activation limit 24 Hours per wallet.</li>
          <li style="text-align: left; padding: 4px;">- TreasuryBox will be refilled forever!</li>
          </ul>          
    <div class="kk-section-cont">
      <div class="dynCont">

        <span class="kk-h5 ma-0" style="
          margin-bottom: 4vh !important;
          margin-top: -4vh !important;
          font-size: 38px;
        "> {{ countDownTime }} </span>

        <generic-button
          @click="approve()"
          title="Approve"
        ></generic-button>
        <generic-button
          @click="requestEarning()"
          title="Send IT !!!"
        ></generic-button>            
      </div>             
    </div>
  </section>
</template>

<script>
  // import ("@/assets/config.js");
  // import ("@/assets/index.js");
  import genericButton from "@/components/genericButton";
  import BigNumber from 'bignumber.js';
  import Web3 from 'web3';

  import { twokTreasuryABI, twokTreasuryBoxAddress, twokTreasuryLockTokenAddress, erc20ABI } from '../contracts/treasurybox.sol/twokTreasuryBox';

  export default {
    name: "treasuryboxdist",
    components: { genericButton },
    props: {
      countDownTime: String
    },
    methods: {
      open(key) {
        this.$emit("open", key);
      },
      clickButton(index) {
        for (let i in this.button_states) {
          if (i === index) {
            this.button_states[i] = !this.button_states[i];
          } else {
            this.button_states[i] = false;
          }
        }
      },
      async requestEarning() {
        let web3 = new Web3( window.ethereum );
        let vault = new web3.eth.Contract( twokTreasuryABI, twokTreasuryBoxAddress );

        try {
          vault.methods.requestEarning().send({
            from: window.ethereum.selectedAddress,
            gas: 3000000
          }, (err, tx) => {
            if (err) {
              this.$store.commit( "setTx", err.message );
              this.open("tx-message");
            } else {
              this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
              this.open( "confirmation" );
            }
          })
        } 
        catch (e) {
          this.$store.commit( "setTx", e.message );
          this.open("tx-message");
        }
      },
      async approve() {
        const tokenPadded = BigNumber( 0.5 * 1e18 );

        let web3 = new Web3( window.ethereum );
        let vault = new web3.eth.Contract( twokTreasuryABI, twokTreasuryBoxAddress );
        let lockToken = new web3.eth.Contract( erc20ABI, twokTreasuryLockTokenAddress );

        // Check allowance
        let currentAllowance;
        
        // this.$store.dispatch("getAccountAddress");

        try {
          console.log(window.ethereum.selectedAddress);
          currentAllowance = await lockToken.methods.allowance( window.ethereum.selectedAddress, vault._address ).call();
        } catch (e) {
          alert(e.message);
        }
        // Approve all tokens
        if ( (currentAllowance < tokenPadded) ) {
          let userTokenBalance;

          try {
            console.log(lockToken.methods);
            userTokenBalance = await lockToken.methods.balanceOf( window.ethereum.selectedAddress ).call();
            lockToken.methods.approve( vault._address, userTokenBalance ).send({
              from: window.ethereum.selectedAddress,
              gas: 1000000,
            }, (err, tx) => {
                if (err) {
                  this.$store.commit( "setTx", err.message );
                  this.open("tx-message");  
                } else {
                  this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
                  this.open("approve")
                }
              })
           } catch (e) {
              this.$store.commit( "setTx", e.message );
               this.open("tx-message");
            }
        }
      },   
    }
  }
</script>

<style scoped>
</style>