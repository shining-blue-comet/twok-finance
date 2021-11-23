<template>
  <section>
      <div class="dynCont">

        <h2>Dexmoon Coin Structure</h2>
        <ul>
          <li>Name: Dexmoon</li>
          <li>Ticker: DXM</li>
          <li>Launch: Fair</li>
          <li>Total Supply: 1,000,000,000,000,000</li>
          <li style="font-weight: bold">7.00%  Tax on all DEXMOON transactions</li>
          <li>6.00%  Holders </li>
          <li>0.50%  Giveaways/Charity</li>
          <li>0.30%  Marketing/Development</li>
          <li>0.10%  Burn Forever</li>
          <li>0.10%  2K Finance Rewards Wallet</li>
          <li>Additional 2.00% added to liquidity (tranfers only)</li>
        </ul>

        <div class="btnGroup flex mw-500">
          <generic-button href="https://charts.bogged.finance/?token=0x7911010aa128e5C2b91E954c821b7fB23ad8ABbc" title="DXM Chart"></generic-button>
          <generic-button href="https://bscscan.com/address/0x7911010aa128e5C2b91E954c821b7fB23ad8ABbc#code" title="BSCScan"></generic-button>
          <generic-button href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7911010aa128e5C2b91E954c821b7fB23ad8ABbc" title="Pancake Swap"></generic-button>
          <generic-button href="https://2kfinance.medium.com/dxm-dexmoon-contract-techrate-audit-video-release-b9ae45841d42" title="Audit Report"></generic-button>
          <generic-button href="https://coinguides.org/binance-smart-chain-metamask/#:~:text=1%20On%20your%20MetaMask%20wallet%20drop%20down%20your,network.%203%20Now%20enter%20the%20details%20as%20follows" title="BSC Guide"></generic-button>
        </div>
      </div>
  </section>
</template>

<script>
import genericButton from "@/components/genericButton";
export default {
    name: "dxminformation",
    components: {genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
        close(key) {
            this.$emit("close", key);
        },
    },
}
</script>

<style scoped>

</style>
