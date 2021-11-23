<template>
  <section class="kk-section">
    <div class="kk-section-top">
      <div class="dynCont left">
        <span class="kk-h5 ma-0">1 Item</span>
      </div>
    </div>
    <div class="kk-section-cont">
      <div class="dynCont left">        
          <span class="kk-h5"
            >Available DexMoon Tokens to Swap for BUSD: {{ accountBalance }} </span
          >          
            <generic-button
              @click="Swap()"
              title="Swap"
            ></generic-button>
            
          </div>
        <div 
          class="kk-h5"
          style="padding-top: 2vh;"
        >Available DXM for Swap: {{ availableEarnings }}  DexMoon </div>
        <div 
          class="kk-h5"
          style="margin-bottom: -1vh;"
        >Total : {{ currentlyStaked }} BUSD </div>      
    </div>
  </section>
</template>

<script>
  // import ("@/assets/config.js");
  // import ("@/assets/index.js");
  import genericButton from "@/components/genericButton";
  import BigNumber from 'bignumber.js';
  export default {
    name: "charityfunding",
    components: { genericButton },
    props: {
      accountBalance: Number,
      availableEarnings: Number,
      currentlyStaked: Number
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
      async stake() {      
        this.$store.commit( "setInputErrorMessage", 'The token input must be a number' )
        if ( !isNaN( this.tokenAmount )) {
          this.tokenAmount = Number(this.tokenAmount)        
        }
        else {
          this.open("input-error");
          return
        }
               
        const tokenPadded = BigNumber( this.tokenAmount * 1e18 );
       
        // Check allowance
        let currentAllowance;
        try {
          currentAllowance = await this.$store.state.lockToken.methods.allowance( this.$store.state.accountAddress, this.$store.state.vault._address ).call()
        } catch (e) {
          alert(e.message);
        }
        // Approve all tokens
        if ( currentAllowance < tokenPadded ) {
          let userTokenBalance;
          
          try {
            userTokenBalance = await this.$store.state.lockToken.methods.balanceOf( window.ethereum.selectedAddress ).call()
            this.$store.state.lockToken.methods.approve( this.$store.state.vault._address, userTokenBalance ).send({
              from: window.ethereum.selectedAddress,
            }, (err, tx) => {
                if (err) {
                  this.$store.commit( "setTransactionMessage", err.message );
                  this.open("tx-message");  
                } else {
                  this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
                  this.open("confirmation")
                }
              })
          } catch (e) {
            this.$store.commit( "setTransactionMessage", e.message );
            this.open("tx-message");
          }
        }
        try {
          this.$store.state.vault.methods.lockLiquidity(tokenPadded.toString()).send({
            from: window.ethereum.selectedAddress,
          }, (err, tx) => {
            if (err) {
              this.$store.commit( "setTx", err.message );
              this.open("tx-message");
            } else {
              this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
              this.open( "confirmation" );
            }
          })
        } catch (e) {
          this.$store.commit( "setTransactionMessage", e.message );
          this.open("tx-message");
        }
      },      
    },
  };
</script>

<style scoped>
</style>