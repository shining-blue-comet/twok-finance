<template>
    <section :class="small ? 'small' : ''" class="kk-loader">
        <div class="kk-loader-title">
            <div class="kk-loader-title-item">
                <span v-if="!small" class="kk-h3 ma-0">{{ title }}</span>
                <span v-else class="kk-h5 ma-0">{{ title }}</span>
            </div>
            <div v-if="showValue" class="kk-loader-title-item">
                <span v-if="!small" class="kk-h3 geneva">{{ percentage }}%</span>
                <span v-else class="kk-h5 ma-0 geneva">{{ percentage }}%</span>
            </div>
        </div>
        <div class="kk-loader-cont">
            <div :style="'width: ' + percentage + '%'" class="kk-loader-bar"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "loader",
    props: {
        percentage: String,
        title: String,
        small: Boolean,
        showValue: Boolean,
    },
}
</script>

<style scoped>
    .kk-loader {position: relative; text-align: left;}
    .kk-loader-title {display: flex; flex-flow: row wrap; justify-content: space-between; align-items: center;}
    .kk-loader-title span.geneva {font-family: 'Geneva', sans-serif;}
    .kk-loader-cont {
        position: relative;
        border: 3px solid rgba(var(--secondary), 1);
        height: 30px;
        background-color: rgba(var(--primary), 1);
        margin-top: 15px;
        background-image: url('../assets/images/pattern.png');
        background-repeat: repeat;
        background-size: 11px;
    }
    .kk-loader-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: rgba(var(--secondary), 1);
        background-image: url('../assets/images/pattern-invert.png');
        background-repeat: repeat;
        background-size: 11px;
    }

    .kk-loader.small .kk-loader-cont {height: 24px; margin-top: 8px;}
</style>