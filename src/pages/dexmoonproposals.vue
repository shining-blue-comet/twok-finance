<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">2 Items</span>
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
    name: "dexmoonproposals",
    components: {IconGrid},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    data: () => ({
        gridItems: [            
            {
                title: 'DexMoon',
                icon: 'folder-icon.png',
                key: 'project',
            },
            {
                title: 'New Proposal',
                icon: 'folder-icon.png',
                key: 'create-proposal',
            },
            
        ],
    })
}

</script>

<style scoped>

</style>