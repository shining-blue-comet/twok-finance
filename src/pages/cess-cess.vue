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
            >Available CESSPOOL Tokens: {{ accountBalance }} </span
          >
          <input-box
            @vModel="inputValue( $event )"
            type="text"
            placeholder="Insert Amount Here"
            :accountBalance="accountBalance"
          ></input-box>
          <span class="kk-h5 mt-7">Locking Time (BETWEEN 1 AND 365 DAYS) <span class="pl-2"> {{ lockingTime }} DAY(S) </span> </span>
          <slider v-model="lockingTime" class="vue3-slider" color="#B3BFDC" track-color="#000000" :height='12' :max="366" :min="1" />
          <div class="btnGroup flex mt-10 mw-450">
            <generic-button
              @click="stake()"
              title="Stake"
            ></generic-button>
            <generic-button
              @clicked="extractEarnings()"
              title="Get Earnings"
            ></generic-button>
            <generic-button @clicked="extractStake()" title="Unstake"></generic-button>
          </div>
        </form>
        <div 
          class="kk-h5"
          style="padding-top: 2vh;"
        >Available Earnings: {{ availableEarnings }}  CESSPOOL </div>
        <div 
          class="kk-h5"
          style="margin-bottom: -1vh;"
        >Currently Staked: {{ currentlyStaked }} CESSPOOL </div>
      </div>
    </div>
  </section>
</template>

<script>
  import genericButton from "@/components/genericButton";
  import inputBox from "@/components/inputBox";
  import BigNumber from 'bignumber.js';
  import slider from "vue3-slider";
  import Web3 from "web3"
  
  export default {
    name: "cess-cess",
    components: { inputBox, genericButton, slider },
    props: {
      accountBalance: Number,
      availableEarnings: Number,
      currentlyStaked: Number
    },
    mounted() {
      setInterval(() => {
        this.accountAddress = this.$store.state.accountAddress;
        this.state = this.$store.state.cess4cess;
      }, 1200);
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
        const web3 = new Web3( window.ethereum )

        this.$store.commit( "setInputErrorMessage", 'The token input must be a number' )
        
        this.approve();

        setTimeout(() => {
          if ( !isNaN( this.tokenAmount ) && ( this.tokenAmount != "" ) ) {
            this.tokenAmount = Number(this.tokenAmount)
          }
          else {
            this.open("input-error");
            return
          }
          
          const tokenPadded = new BigNumber( this.tokenAmount * 1e18 );
          const daysInSeconds = new BigNumber( this.lockingTime * 86400 );

          console.log(tokenPadded.toString());

          window.web3.currentProvider.enable();
  
          try {
            this.state.vault.methods.lockLiquidity( web3.utils.toHex( tokenPadded ), daysInSeconds.toString()).send({
              from: this.accountAddress,
              gas: 800000,
            }, (err, tx) => {
              if (err) {
                this.$store.commit( "setTx", err.message );
                this.open("tx-message");                                                                                                     
              } else {
                this.$store.commit( "setTx", "https://bscscan.com/tx/" + tx );
                console.log("confirmed  " + tx);
                this.open( "confirmation" );
              }
            })
          } catch (e) {
            this.$store.commit( "setTx", e.message );
            this.open("tx-message");
          }
        }, 1000);
      },

      extractEarnings () {
        try {
          this.state.vault.methods.extractEarnings().send({
            from: this.accountAddress,
            gas: 800000,
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
      extractStake() {
        try {
          this.state.vault.methods.extractLiquidity().send({
            from: this.accountAddress,
            gas: 800000,
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
        try {
          currentAllowance = await this.state.lockToken.methods.allowance( this.accountAddress, this.state.vaultAddress ).call()
        } catch (e) {
          alert(e.message);
        }
        // Approve all tokens
        if ( (currentAllowance < tokenPadded) ) {
          let userTokenBalance;

          try {
            userTokenBalance = await this.state.lockToken.methods.balanceOf( this.accountAddress ).call();
            this.state.lockToken.methods.approve( this.state.vaultAddress, userTokenBalance ).send({
              from: this.accountAddress,
              gas: 100000,
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
        this.tokenAmount = value;
      }
    },
    data: () => ({
      tokenAmount: '',
      lockingTime: 1,
      accountAddress: '',
      state: {}
    }),
  };
</script>

<style scoped>
</style>
