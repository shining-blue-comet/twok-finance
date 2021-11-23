<template>
    <section :class="active ? 'active' : ''" class="kk-mobiMenu">
        <div class="kk-mobiMenu-inner">
            <ul class="kk-mobiMenu-list">
                <li v-for="(menuItem, index) in menuItems" :key="index" class="kk-mobiMenu-item">
                    <div class="kk-mobiMenu-link">
                        <!-- <div v-if="menuItem.key" class="kk-mobiMenu-txt" @click="active = false; $emit('active', null); open(menuItem.key)">{{ menuItem.title }}</div> -->
                        <!-- <a v-else-if="menuItem.href" :href="menuItem.href" class="kk-mobiMenu-txt" target="_blank">{{ menuItem.title }}</a> -->
                        <!-- <div v-else @click="menuItem.subActive = !menuItem.subActive" class="kk-mobiMenu-txt">{{ menuItem.title }}</div> -->
                        <div
                            class="kk-mobiMenu-arrow"
                            v-if="menuItem.subItems"
                            :class="menuItem.subActive ? 'active' : '' "
                            @click="menuItem.subActive = !menuItem.subActive">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chevron-right" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                <g><path d="M9,19c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L13.586,12L8.293,6.707   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414l-6,6C9.512,18.902,9.256,19,9,19z"></path></g>
                            </svg>
                        </div>
                    </div>
                    <ul :class="menuItem.subActive ? 'subActive' : ''" class="kk-subMenu">
                        <li v-for="(subItem, index) in menuItem.subItems" :key="index" class="kk-subMenu-item">
                            <!-- <div v-if="subItem.key" class="kk-subMenu-link" @click="active = false; $emit('active', null); open(subItem.key)">{{ subItem.title }}</div> -->
                            <!-- <a v-else-if="subItem.href" :href="subItem.href" class="kk-subMenu-link" target="_blank">{{ subItem.title }}</a> -->
                            <!-- <div v-else class="kk-subMenu-link">{{ subItem.title }}</div> -->
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "mobileMenu",
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
    data: () => ({
        menuItems: [
            {
                title: "File",
                subActive: false,
                subItems: [
                    {
                        key: "about",
                        title: "About",
                    },
                    {
                        key: "information",
                        title: "Information"
                    },
                    {
                        key: "my-wallet",
                        title: "My Wallet"
                    },
                ],
            },
            {
                key: "vault",
                title: "Vault",
            },
            {
                title: "Governance",
                subActive: false,
                subItems: [
                    {
                        key: "governance",
                        title: "Projects",
                    },
                    {
                        key: "create-project",
                        title: "Create"
                    },
                ],
            },
            {
                title: "Trade",
                href: '#',
            },
            {
                key: "charts",
                title: "Charts",
            },
        ],
    }),
    props: {
        active: Boolean,
    },
}
</script>

<style scoped>
    @media (min-width: 950px) {.kk-mobiMenu {display: none !important;}}
    .kk-mobiMenu {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 63px;
        left: 0;
        width: 100%;
        height: calc(100vh - 63px);
        background-color: rgba(var(--primary), 1);
        z-index: 1000;
        -webkit-transition: opacity 250ms ease-out;
        -moz-transition: opacity 250ms ease-out;
        -o-transition: opacity 250ms ease-out;
        transition: opacity 250ms ease-out;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }

    .kk-mobiMenu.active {opacity: 1; pointer-events: auto;}
    .kk-mobiMenu-inner {position: relative; padding: 40px 20px;}

    /*/////////////////////////////////*/
    /*//////////// MENU LIST //////////*/
    /*/////////////////////////////////*/

    .kk-mobiMenu-list {display: block; margin: 0; padding: 0;}
    .kk-mobiMenu-item {display: block; list-style: none; margin-bottom: 20px;}
    .kk-mobiMenu-item:nth-last-child(1) {margin-bottom: 0;}
    .kk-mobiMenu-link {display: block; font-size: 1.5rem; color: rgba(var(--secondary), 1); text-align: left; cursor: pointer;}
    .kk-mobiMenu-txt {display: inline-block; vertical-align: middle;}
    .kk-mobiMenu-arrow {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        cursor: pointer;
        -moz-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        text-align: center;
        margin-left: 15px;
        -webkit-transition: -webkit-transform 250ms ease-out;
        -moz-transition: -moz-transform 250ms ease-out;
        -o-transition: -o-transform 250ms ease-out;
        transition: transform 250ms ease-out;
        -webkit-border-radius: 13px;
        border-radius: 13px;
        border: 2px solid rgba(var(--secondary), 1);
        font-size: 0;
    }

    .kk-mobiMenu-arrow svg {display: inline-block; height: 100%; width: 100%; fill: rgba(var(--secondary), 1);}
    .kk-mobiMenu-arrow.active {
        -moz-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }

    /*/////////////////////////////////*/
    /*//////////// SUB MENU ///////////*/
    /*/////////////////////////////////*/

    .kk-subMenu {
        margin: 0;
        padding: 0 0 0 10px;
        -webkit-transition: height 250ms ease-out;
        -moz-transition: height 250ms ease-out;
        -o-transition: height 250ms ease-out;
        transition: height 250ms ease-out;
        height: 0;
        overflow: hidden;
    }

    .kk-subMenu.subActive {height: auto; margin: 15px 0 0 0;}
    .kk-subMenu-item {display: block; list-style: none; margin-bottom: 15px;}
    .kk-subMenu-link {display: block; font-size: 1.2rem; color: rgba(var(--secondary), 1); cursor: pointer;}
</style>