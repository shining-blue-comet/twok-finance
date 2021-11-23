<template>
    <section class="kk-header">
        <div class="kk-header-inner inner-div">
            <div class="kk-logo" @click="open('welcome')"><img src="../assets/images/2k-logo.png" alt="Logo"/></div>
            <ul class="kk-nav">
                <li v-for="(navItem, index) in navItems" :key="index" class="kk-nav-item TouchScreenHover">
                    <div v-if="navItem.key" @click="open(navItem.key)" class="kk-nav-link TSE">{{ navItem.title }}</div>
                    <a v-else-if="navItem.href" :href="navItem.href" class="kk-nav-link TSE" target="_blank">{{ navItem.title }}</a>
                    <div v-else class="kk-nav-link TSE">{{ navItem.title }}</div>
                    <div v-if="navItem.menuItems" class="kk-dropdown TSE">
                        <div class="kk-dropdown-inner">
                            <ul class="kk-dropdown-list">
                                <li v-for="(menuItem, index) in navItem.menuItems" :key="index" class="kk-dropdown-item">
                                    <div v-if="menuItem.key" @click="open(menuItem.key)" class="kk-dropdown-link TSE">{{ menuItem.title }}</div>
                                    <a v-else-if="menuItem.href" :href="menuItem.href" class="kk-dropdown-link TSE" target="_blank">{{ menuItem.title }}</a>
                                    <div v-else class="kk-dropdown-link TSE">{{ menuItem.title }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="kk-menuBtn-hold">
                <div class="kk-menuBtn" :class="menuBtnState ? 'change' : ''" @click="$emit('menuState', null);">
                    <div class="kk-menuBar-1"></div>
                    <div class="kk-menuBar-2"></div>
                    <div class="kk-menuBar-3"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "headerView",
    props: {
        menuBtnState: Boolean,
    },
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
    data: () => ({
        navItems: [
            {
                title: "File",
                menuItems: [
                    {
                        key: 'about',
                        title: "About",
                    },
                    {
                        key: 'information',
                        title: "TWOK"
                    },
                    {
                        key: 'dxminformation',
                        title: "Dexmoon"
                    },
                    {
                        key: 'partnerships',
                        title: "Partnerships"
                    },     
                ],
            },
            {
                key: 'vault',
                title: "Vaults",
            },          
            {
                key: 'charts',
                title: "Charts",
            },
            {
                key: 'trigger',
                title: "Triggers",
            },
        ],
    }),
}
</script>

<style scoped>
    .kk-header {position: fixed; bottom: 0; left: 0; right: 0; background-color: rgba(var(--primary), 1); border-bottom: 3px solid rgba(var(--secondary), 1); z-index: 1000;}
    .kk-header-inner {display: flex; flex-flow: row nowrap; align-items: center;}

    /*/////////////////////////////////*/
    /*/////////// NAVIGATION //////////*/
    /*/////////////////////////////////*/

    .kk-nav {display: block; margin: 0; padding: 0; font-size: 0; text-align: left; white-space: nowrap;}
    .kk-nav-item {display: inline-block; list-style: none; position: relative;}
    .kk-nav-link {
        display: block;
        height: 40px;
        box-sizing: border-box;
        padding: 0 20px 0 20px;
        line-height: 40px;
        font-size: 1rem;
        cursor: pointer;
        color: rgba(var(--secondary), 1);
    }
    .kk-nav-link:hover {background-color: rgba(var(--secondary), 1); color: rgba(var(--primary), 1);}
    .kk-logo {width: 25px; margin-right: 20px; cursor: pointer;}

    /*/////////////////////////////////*/
    /*///////// DROPDOWN MENU /////////*/
    /*/////////////////////////////////*/

    .kk-dropdown {
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 183px;
        border: 3px solid rgba(var(--secondary), 1);
        background-color: rgba(var(--primary), 1);
        opacity: 0;
        pointer-events: none;
        -moz-transform: scale(0.6);
        -webkit-transform: scale(0.6);
        -o-transform: scale(0.6);
        -ms-transform: scale(0.6);
        transform: scale(0.6);
    }

    .kk-nav-item:hover .kk-dropdown {
        opacity: 1;
        pointer-events: auto;
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        -o-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    .kk-dropdown-inner {position: relative;}
    .kk-dropdown-list {display: block; margin: 0; padding: 0;}
    .kk-dropdown-item {list-style: none; display: block;}
    .kk-dropdown-link {
        display: block;
        font-size: 1rem;
        padding: 10px 20px;
        color: rgba(var(--secondary), 1);
        cursor: pointer;
    }

    .kk-dropdown-link:hover {background-color: rgba(var(--secondary), 1); color: rgba(var(--primary), 1);}

    /*/////////////////////////////////*/
    /*////////// MOBILE MENU //////////*/
    /*/////////////////////////////////*/

    .kk-menuBtn-hold {text-align: center; font-size: 0; height: 100%; display: none;}
    .kk-menuBtn-hold:before {content: ""; display: inline-block; height: 100%; width: 0; vertical-align: middle;}
    .kk-menuBtn {display: inline-block; cursor: pointer; vertical-align: middle;}
    .kk-menuBar-1, .kk-menuBar-2, .kk-menuBar-3 {width: 23px; height: 4px; background-color: rgba(var(--secondary), 1); margin: 4px 0; transition: 0.4s;}
    .kk-menuBtn.change .kk-menuBar-1 {-webkit-transform: rotate(-45deg) translate(-6px, 4px); transform: rotate(-45deg) translate(-6px, 4px);}
    .kk-menuBtn.change .kk-menuBar-2 {opacity: 0;}
    .kk-menuBtn.change .kk-menuBar-3 {-webkit-transform: rotate(45deg) translate(-7px, -6px); transform: rotate(45deg) translate(-7px, -6px);}

    /*/////////////////////////////////*/
    /*/////////// RESPONSIVE //////////*/
    /*/////////////////////////////////*/

    @media (min-width: 1450px){
        .kk-nav-link {height: 40px; line-height: 40px;}
    }

    @media (max-width: 950px){
        .kk-header-inner {justify-content: space-between; height: 60px;}
        .kk-menuBtn-hold {display: block;}
        .kk-nav {display: none;}
    }

</style>
