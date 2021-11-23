<template>
  <section class="kk-section">
    <div class="kk-section-top">
      <div class="dynCont left">
        <span class="kk-h5 ma-0">1 Item</span>
      </div>
    </div>
    <div class="kk-section-cont">
      <div class="dynCont left">
        <form>
          <span class="kk-h5"
            >Available TWOK Tokens: {{ accountBalance }} </span
          >
          <input-box
            @vModel="inputValue( $event )"
            type="text"
            placeholder="Insert Amount Here"
            :value="accountBalance"
          ></input-box>    
          <div class="btnGroup flex mt-10 mw-450">
            <generic-button
              @click="approve()"
              title="Approve"
            ></generic-button>           
            <generic-button
              @click="enterStaking()"
              title="Stake"
            ></generic-button>
            <generic-button @clicked="leaveStaking()" title="Unstake"></generic-button>
          </div>
        </form>        
        <div 
          class="kk-h5"
          style="margin-bottom: -1vh; margin-top: 2vh"
        >Currently Staked: {{ stakerQuota }} TWOK </div>
      </div>
    </div>
  </section>
</template>

<script>
  import genericButton from "@/components/genericButton";
  import inputBox from "@/components/inputBox";
  import BigNumber from 'bignumber.js';
  export default {
    name: "treasurybox",
    components: { inputBox, genericButton },
    props: {
      accountBalance: Number,
      stakerQuota: Number
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
      async enterStaking() {      
        this.$store.commit( "setInputErrorMessage", 'The token input must be a number' )
        if ( !isNaN( this.tokenAmount ) && ( this.tokenAmount != "" ) ) {
          this.tokenAmount = Number(this.tokenAmount)
        }
        else {
          this.open("input-error");
          return
        }
        console.log(this.tokenAmount);

        const tokenPadded = BigNumber( this.tokenAmount * 1e18 );

        try {
          this.$store.state.vault.methods.enterStaking(tokenPadded.toString()).send({
            from: window.ethereum.selectedAddress,
            gas: 1000000
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
          this.$store.commit( "setTx", e.message );
          this.open("tx-message");
        }
      },
      leaveStaking() {
        console.log(this.stakerQuota);
        try {
          this.$store.state.vault.methods.leaveStaking( ( BigNumber ( this.stakerQuota ) ) ).send({
            from: this.$store.state.accountAddress,
            gas: 1000000
          }, (err, tx) => {
            if (err) {
              this.$store.commit( "setTx", err.message );
              this.open("tx-message");  
            } else {
              this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
              this.open("confirmation");
            }
          })
        } catch (e) {
          this.$store.commit( "setTx", e.message );
          this.open("tx-message");
        }
      },
      async approve() {
        this.$store.commit( "setInputErrorMessage", 'The token input must be a number' )
        if ( !isNaN( this.tokenAmount ) && ( this.tokenAmount != "" ) ) {
          this.tokenAmount = Number(this.tokenAmount)
        }
        else {
          this.open("input-error");
          return
        }

        const tokenPadded = BigNumber( this.tokenAmount * 1e18 )

        // Check allowance
        let currentAllowance;
        
        this.$store.dispatch("getAccountAddress");

        try {
          currentAllowance = await this.$store.state.lockToken.methods.allowance( this.$store.state.accountAddress, this.$store.state.vault._address ).call()
        } catch (e) {
          alert(e.message);
        }
        // Approve all tokens
        if ( (currentAllowance < tokenPadded) ) {
          let userTokenBalance;

          try {
            userTokenBalance = await this.$store.state.lockToken.methods.balanceOf( window.ethereum.selectedAddress ).call();
            this.$store.state.lockToken.methods.approve( this.$store.state.vault._address, userTokenBalance ).send({
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
      inputValue( value ) {
        this.fullAmount = 0;
        this.tokenAmount = value;
      },
    },
    data: () => ({
      button_states: {
        "1_day": false,
        "1_week": false,
        "1_month": false,
        "1_year": false,
      },
      tokenAmount: '',
      fullAmount: 0
    }),
  };
</script>

<style scoped>
</style>
