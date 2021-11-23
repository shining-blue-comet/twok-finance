<template>
    <div class="kk-container">
        <header-view :menu-btn-state="menuState" @menuState="toggleMenu" @open="open"></header-view>
        <section class="kk-main">
            <mobile-menu :active="menuState" @active="closeMenu" @open="open"></mobile-menu>
            <div class="kk-grid-inner inner-div">
                <dash-icons :grid-items="gridItems" @open="open"></dash-icons>
                <slot></slot>
            </div>
        </section>
    </div>
</template>

<script>
import headerView from "./headerView";
import mobileMenu from "@/components/mobileMenu";
import DashIcons from "@/components/dashIcons";

export default {
    name: "mainView",
    components: {DashIcons, mobileMenu, headerView},
    methods: {
        toggleMenu() {
            this.menuState = !this.menuState;
        },
        closeMenu() {
            this.menuState = false
        },
        open(key) {
            this.$emit("open", key);
        }
    },
    props: {},
    data: () => ({
        menuState: false,
        gridItems: [
            {
                key: "about",
                title: "About 2k Finance",
                icon: "about-twok.png",
            },
            {
                key: "dxminformation",
                title: "About Dexmoon",
                icon: "about-dxm.png",
            },  
         
            {
                key: "vault",
                title: "Vaults",
                icon: "vault-icon.png",
            },
            {
                key: "trigger",
                title: "Triggers",
                icon: "trigger.png",
            },
            {
                key: "charts",
                title: "Charts",
                icon: "charts.png",
            },      
            {
                key: "partnerships",
                title: "Partnerships",
                icon: "folder-icon.png",
            },      
        ],
    }),
}
</script>

<style scoped>
.kk-container {
    display: flex;
    flex-flow: column wrap;
    height: 100vh;
}

.kk-main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}

.kk-grid-inner {
    position: relative;
    min-height: 100%;
}

</style>
