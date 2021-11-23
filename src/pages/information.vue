<template>
    <section>
        <div class="dynCont">
            <h2>TWOK Coin Structure</h2>
            <ul>
              <li>Name: 2K Finance</li>
              <li>Ticker: TWOK</li>
              <li>Launch: Fair</li>
              <li>Total Supply: 2,000</li>
              <li>1.00%  Tax on all TWOK transactions</li>
              <li>0.90%  Vault Emissions Wallet</li>
              <li>0.10%  Burn Forever</li>
            </ul>
            <h2 >Tokenomics</h2>
            <p>
                It's simple and elegant, 2K has a minimal supply of 2,000 TWOK tokens ever to be minted. <br>
                Having such a small supply of tokens is deflationary at its core. <br>
            </p>
            <br>
            <h2>Minimal Supply</h2>
            <p>
                2,000 TWOK tokens were minted with no ability to create more tokens. With a supply this low there <br>
                are huge gains to be made off just one token. The only way for more tokens to circulate is by earning them <br>
                through different aspects of our ecosystem. <br>
            </p>
            <br>
            <h2>Deflationary</h2>
            <p>
                While our token has an extremely low supply we're also deflationary. Every time a weak hand sells a <br>
                1% fee is taken from that transaction and allocated in two ways. First, 0.9% is transferred back to <br>
                the vault emisisons wallet and 0.1% of that is burned forever. <br>
            </p>
            <br>
                <div class="btnGroup flex mw-500">
                <generic-button href="https://charts.bogged.finance/?token=0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452" title="TWOK Chart"></generic-button>
                <generic-button href="https://bscscan.com/token/0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452" title="BSCScan"></generic-button>
                <generic-button href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452" title="Pancake Swap"></generic-button>
                <generic-button href="https://bscscan.com/tx/0x85adf36b7fb601c41d54fad49ad35fa6322d9c802f49f400d9bf893e13b68cc5" title="Tokens Burned"></generic-button>
                <generic-button href="https://solidity.finance/audits/TWOK/" title="Audit Report"></generic-button>
                <generic-button href="https://coinguides.org/binance-smart-chain-metamask/#:~:text=1%20On%20your%20MetaMask%20wallet%20drop%20down%20your,network.%203%20Now%20enter%20the%20details%20as%20follows" title="BSC Guide"></generic-button>
            </div>
        </div>
    </section>
</template>

<script>
import genericButton from "@/components/genericButton";
export default {
    name: "information",
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
