<template>
    <div :class="horizontal ? 'horizontal' : ''" class="kk-grid">
        <div v-for="(gridItem, index) in gridItems" :key="index" class="kk-grid-item">
            <div class="kk-grid-link TSE-opacity" @click="open(gridItem.key)">
                <div class="kk-grid-icon">
                    <img :src="require('../assets/images/' + gridItem.icon)" alt="Icon"/>
                </div>
                <div class="kk-grid-txt"><span>{{ gridItem.title }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dashIcons",
    props: {
        horizontal: Boolean,
        gridItems: Array,
    },
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
}
</script>

<style scoped>
/*/////////////////////////////////*/
/*////////////// GRID /////////////*/
/*/////////////////////////////////*/

.kk-grid {
    position: absolute;
    top: 0;
    right: 0;
    height: calc(100vh - 63px);
    box-sizing: border-box;
    padding: 40px 0 50px 50px;

}

.kk-grid-item {display: block; margin-bottom: 25px;}
.kk-grid-link {display: block; width: 155px; text-align: center; font-size: 0; cursor: pointer;}
.kk-grid-link:hover {opacity: 0.6;}
.kk-grid-icon {display: inline-block; height: 35px; margin-bottom: 10px;}
.kk-grid-icon img {width: auto; height: 100%;}
.kk-grid-txt {display: block; width: 100%; text-align: center; font-size: 0;}
.kk-grid-txt span {
    display: inline-block;
    padding: 3px 10px;
    font-size: 11px;
    color: rgba(var(--primary), 1);
    text-shadow: 1px 1px #283531;
}

@media (min-width: 1251px) {
    /*////////// HORIZONTAL /////////*/
    .kk-grid.horizontal {
        top: auto;
        bottom: 0;
        height: auto;
        width: 100%;
        padding: 50px 0;
    }

    .kk-grid.horizontal .kk-grid-item {display: inline-block; margin-right: 50px; vertical-align: top; margin-bottom: 0;}
    .kk-grid.horizontal .kk-grid-item:nth-last-child(1) {margin-right: 0;}
    .kk-grid.horizontal .kk-grid-link {width: auto; max-width: 155px;}
}

/*/////////////////////////////////*/
/*////////// RESPONSIVE ///////////*/
/*/////////////////////////////////*/

@media (min-width: 1450px) {
    .kk-grid-icon {height: 45px;}
    .kk-grid {height: calc(100vh - 83px);}
}

@media (max-width: 1250px) {
    .kk-grid.horizontal {left: 0; right: auto; padding: 50px 50px 50px 0;}
}

@media (max-width: 1150px) {
    .kk-grid-txt span {font-size: 12px;}
    .kk-grid-link {width: 100px;}
    .kk-grid-item {margin-bottom: 30px;}
    .kk-grid {padding: 30px 0 30px 30px;}
    .kk-grid.horizontal {padding: 30px 30px 30px 0;}
}

@media (max-width: 950px) {
    .kk-grid {display: none;}
}
</style>
