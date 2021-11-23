<template>
    <section>
        <div class="dynCont">
            <h5> 
                <a v-if="isDisplayTxLink" :href="`${tx}`" target="_blank" class="blink" > Check transaction status on BSCScan </a>
                <h5 v-else-if="!isDisplayTxLink"> Transaction pending... </h5>
             </h5>
            <div class="btnGroup">
                <generic-button @clicked="open('vault')" title="Vaults"></generic-button>
                <generic-button href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452" title="Buy TWOK" enabled></generic-button>
            </div>
        </div>
    </section>
</template>

<script>
import GenericButton from "@/components/genericButton";
export default {
    name: "confirmation",
    components: {GenericButton},
    props: {
        isDisplayTxLink: Boolean,
        tx: String
    },
    methods: {
        open(key) {
            this.$emit("open", key);
            this.$store.commit( "setTransactionLink", false );
        },
    }
}
</script>

<style scoped>

</style>
