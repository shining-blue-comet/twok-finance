<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0"> {{ gridItems.length }} Items</span>
            </div>
        </div>
        <div class="kk-section-cont">
            <icon-grid :grid-items="gridItems" @open="open"></icon-grid>
        </div>
    </section>
</template>

<script>
import IconGrid from "@/components/iconGrid";
export default {
    name: "charts",
    components: {IconGrid},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    data: () => ({
        gridItems: [
            {
                title: 'PooCoin',
                icon: 'poocoin512.png',
                href: 'https://poocoin.app/tokens/0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452',
            },
            {
                title: 'Go Swap',
                icon: 'B9INvKrq_400x400.jpg',
                href: 'https://goswapp-bsc.web.app/0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452',
            },
            {
                title: 'dexGuru',
                icon: 'dexguru.png',
                href: 'https://dex.guru/token/0xae1e69bbd3dc0c470ce4ba28794753cdfdec7452-bsc',
            },
            {
                title: 'Dexoon Chart on Bogged Finance',
                icon: 'DEXMOON.png',
                href: 'https://charts.bogged.finance/?token=0x7911010aa128e5C2b91E954c821b7fB23ad8ABbc',
            },
        ],
    })
}
</script>

<style scoped>

</style>
