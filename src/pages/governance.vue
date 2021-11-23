<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">{{ gridItems.length }} Items</span>
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
    name: "governance",
    components: {IconGrid},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    data: () => ({
        gridItems: [
            {
                title: 'TWOK Proposals',
                icon: '2K_CG200x200.png',
                key: 'twokproposals',
            },            
            {
                title: 'Register Project',
                icon: 'folder-icon.png',
                key: 'create-project',
            },
            
        ],
    })
}
</script>

<style scoped>

</style>