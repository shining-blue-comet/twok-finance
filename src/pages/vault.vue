<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">
                  VAULTS<br>
                </span>
            </div>
        </div>
        <div class="kk-section-cont">
            <icon-grid :grid-items="gridItems" @open="open"></icon-grid>
            <br>
            <h3> ENTER THE LOOP </h3>
            <p>
              SELECT VAULT - ALLOCATE TOKENS - CHOOSE LOCK TIME - CLAIM REWARDS <br>
            </p>
            <br>
            <h3> HOW DOES IT WORK? </h3>
            <p>
              The 2K Finance reward protocol is being constantly <br>
              regenerated through transaction taxes. <br>
              Every transaction, within our ecosystem, helps refuel the reward pool <br>
              Therefore supplying a consistent flow of gains for our stakers. <br>
            </p>
            <br>
            <h3> VAULT FEE </h3>
            <p>
              Every vault has a usage fee that is applied when stakers claim rewards. <br>
              This fee is calculated in a dissolving fashion, relative to time staked. <br>
            </p>
            <br>
            <h3> HOW IS THIS FEE CALCULATED? </h3>
            <p>
                LP Vaults - DAY 1 = 10% || DAY 365 = 1% <br>
                TWOK Vault - DAY 1 = 70% || DAY 365 = 3% <br>
              <br>
              The moment someone puts their tokens into one of the vaults, fee degeneration begins and continues throughout the entirety of a year. <br>
              Beginning at 10% and ending at 1% for the LP Vaults and at 70% and ending at 3% on the TWOK only Vault. <br>
              This fee is only applied to the claimed rewards and is funneled <br>
              back into the following aspects of the ecosystem: <br>
            </p>
            <br>
            <ul>
              <li>TWOK Rewards Wallet</li>
              <li>Marketing/Development</li>
            </ul>
        </div>
    </section>
</template>

<script>
import iconGrid from "@/components/iconGrid";
export default {
name: "vault",
    components: {iconGrid},
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
    data: () => ({
        gridItems: [
            {
                title: "DXM / BNB LP PancakeSwap",
                icon: "vault-icon.png",
                key: "dxm-bnb-lp",
            },
            {
                title: "TWOK / BNB LP PancakeSwap",
                icon: "vault-icon.png",
                key: "twok-bnb-lp",
            },
            {
                title: "TWOK Vault",
                icon: "vault-icon.png",
                key: "twok-vault",
            },            
            {
                title: "TWOK / BUSD LP APESwap",
                icon: "vault-icon.png",
                key: "twok-busd-apelp",
            },
            {
                title: "TWOK / BNB LP FEGex",
                icon: "vault-icon.png",
                key: "twok-bnb-fegexlp",
            },
//            {
//                title: "USDT/BUSD LP",
//                icon: "vault-icon.png",
//                key: "usdt-busd-lp",
//            },
//            {
//                title: "TWOK / DAI LP",
//                icon: "vault-icon.png",
//                key: "twok-dai-lp",
//            },
//           {
//                title: "TWOK / USDT LP",
//                icon: "vault-icon.png",
//                key: "twok-usdt-lp",
//            },
//            {
//                title: "TWOK / BTC LP",
//                icon: "vault-icon.png",
//                key: "twok-btc-lp",
//            },
//            {
//                title: "TWOK / ETH LP",
//                icon: "vault-icon.png",
//                key: "twok-eth-lp",
//            },
//            {
//                title: "TWOK / IOTX LP",
//                icon: "vault-icon.png",
//                key: "twok-iotx-lp",
//            },
//            {
//               title: "TWOK / IOST LP",
//                icon: "vault-icon.png",
//                key: "twok-iost-lp",
//            },
        ],
    })
}
</script>

<style scoped>

</style>
