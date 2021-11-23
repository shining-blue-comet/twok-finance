<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">3 Items</span>
            </div>
        </div>
        <div class="kk-section-cont">
            <folder-icons @open="open" :iconItems="iconItems"></folder-icons>
            <div class="btnGroup">
                <generic-button href="#" title="Learn how to connect"></generic-button>
            </div>
        </div>
    </section>
</template>

<script>
import genericButton from "@/components/genericButton";
import folderIcons from "@/components/folderIcons";
export default {
    name: "connect-wallet",
    components: {folderIcons, genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    data: () => ({
        iconItems: [
            {
                icon: 'metamask.png',
                title: 'Metamask',
                href: '#',
            },
            {
                icon: 'trust-wallet.png',
                title: 'Trust Wallet',
                href: '#',
            },
            {
                icon: 'binance-smart-chain.png',
                title: 'BinanceSmartChain',
                href: '#',
            },
        ],
    })
}
</script>

<style scoped>

</style>