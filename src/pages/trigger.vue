<template>
    <section>
        <div class="dynCont center">
            <h2>Triggers - Pull the trigger, Complete the Transaction.</h2>
            <p>
                Earn a % of the transaction, Triggers activate the swap on the selected wallet.
                Gunners earn a % of the initialiazed transaction on Dexmoon-TWOK Swap,
                and of the initialiazed Charity Transaction.
            </p>
            <div class="btnGroup flex mw-500">
                <generic-button @clicked="open('charityfunding')" title="Charity Funding"></generic-button>
                <generic-button @clicked="open('dxmswaptwok')" title="DexMoon Swap to TWOK"></generic-button>
                <generic-button @clicked="open('treasuryboxdist')" title="TreasuryBox"></generic-button>
            </div>
        </div>
    </section>
</template>

<script>
import genericButton from "@/components/genericButton";
export default {
    name: "trigger",
    components: {genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
        close(key) {
            this.$emit("close", key);
        }
    },
}
</script>

<style scoped>

</style>
