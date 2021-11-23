<template>
    <section class="kk-section">
        
        <div class="kk-section-cont">
            <icon-grid :grid-items="gridItems" @open="open"></icon-grid>
        </div>
    </section>
</template>

<script>
import IconGrid from "@/components/iconGrid";
export default {
    name: "partnerships",
    components: {IconGrid},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    data: () => ({
        gridItems: [
            {
                title: 'MoonTimer',
                icon: 'moontimer.png',
                key: "moontimer",
            },
            {
                title: 'CESSPOOL',
                icon: 'cesspool.png',
                key: "cesspool",
            },
        ],
    })
}
</script>

<style scoped>

</style>
