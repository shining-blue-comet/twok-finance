<template>
    <section class="kk-iconGrid">
        <ul class="kk-iconGrid-list">
            <li v-for="(gridItem, index) in gridItems" :key="index" class="kk-iconGrid-item">
                <div v-if="gridItem.key" @click="open(gridItem.key)" class="kk-iconGrid-link">
                    <div class="kk-iconGrid-icon TSE-opacity">
                        <img :src="require('../assets/images/' + gridItem.icon)" alt="icon"/>
                    </div>
                    <div class="kk-iconGrid-txt">
                        <span class="TSE">{{ gridItem.title }}</span>
                    </div>
                </div>
                <a v-else-if="gridItem.href" :href="gridItem.href" class="kk-iconGrid-link" target="_blank">
                    <div class="kk-iconGrid-icon TSE-opacity">
                        <img :src="require('../assets/images/' + gridItem.icon)" alt="icon"/>
                    </div>
                    <div class="kk-iconGrid-txt">
                        <span class="TSE">{{ gridItem.title }}</span>
                    </div>
                </a>
                <div v-else class="kk-iconGrid-link">
                    <div class="kk-iconGrid-icon TSE-opacity">
                        <img :src="require('../assets/images/' + gridItem.icon)" alt="icon"/>
                    </div>
                    <div class="kk-iconGrid-txt">
                        <span class="TSE">{{ gridItem.title }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "iconGrid",
    accountBalance: 0,
    methods: {
        open(key) {
            this.$emit("open", key);
        },
    },
    props: {
        gridItems: Array,
    },
}
</script>

<style scoped>
    .kk-iconGrid {position: relative;}
    .kk-iconGrid-list {display: block; margin: 0; padding: 0; text-align: left; font-size: 0;}
    .kk-iconGrid-item {display: inline-block; list-style: none; vertical-align: top; padding: 10px; width: 20%; box-sizing: border-box;}
    .kk-iconGrid-link {display: block; text-align: center; font-size: 0; cursor: pointer;}
    .kk-iconGrid-icon {display: inline-block; height: 50px; margin-bottom: 10px; max-width: 100%;}
    .kk-iconGrid-icon img {width: auto; height: 100%; max-width: 100%;}
    .kk-iconGrid-txt {text-align: center; font-size: 0;}
    .kk-iconGrid-txt span {
        display: inline-block;
        padding: 3px 5px;
        font-size: 10px;
        color: rgba(var(--secondary), 1);
        background-color: rgba(var(--primary), 1);
    }

    .kk-iconGrid-link:hover .kk-iconGrid-txt span {background-color: rgba(var(--secondary), 1); color: rgba(var(--primary), 1);}
    .kk-iconGrid-link:hover .kk-iconGrid-icon {opacity: 0.6;}

    @media (max-width: 650px){
        .kk-iconGrid-item {width: 25%;}
    }

    @media (max-width: 550px){
        .kk-iconGrid-item {width: 33.33%;}
    }

    @media (max-width: 450px){
        .kk-iconGrid-item {width: 50%;}
    }
</style>
