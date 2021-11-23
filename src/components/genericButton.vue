<template>
    <div class="btn-container">
        <div v-if="!href && !selectable" @click="$emit('clicked', null)" :class="disabled ? 'disabled' : ''" class="kk-button TSE">
            <span class="kk-button-txt TSE">{{ title }}</span>
        </div>
        <div v-if="selectable" @click="$emit('clicked', null)" :class="[disabled ? 'disabled' : '', selected ? 'selected' : '']" class="kk-button TSE">
            <span class="kk-button-txt TSE">{{ title }}</span>
        </div>
        <a v-if="href" :href="href" @click="$emit('clicked', null)" :class="disabled ? 'disabled' : ''" class="kk-button TSE" target="_blank">
            <span class="kk-button-txt TSE">{{ title }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "genericButton",
    props: {
        title: String,
        href: String,
        disabled: Boolean,
        selectable: Boolean,
        selected: Boolean,
    },
}
</script>

<style scoped>
    .btn-container {display: inline-block;}
    .kk-button {
        background-color: rgba(var(--primary), 1);
        font-size: 0;
        color: rgba(var(--secondary), 1);
        min-width: 120px;
        box-sizing: border-box;
        padding: 0 20px;
        height: 35px;
        outline: 3px solid rgba(var(--secondary), 1);
        border: 3px outset rgba(var(--primary-light), 1);
        white-space: nowrap;
        display: block;
        margin: 1.5px;
        cursor: pointer;
        text-align: center;
    }

    .kk-button.disabled {
        pointer-events: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .kk-button.disabled .kk-button-txt {opacity: 0.3;}
    .kk-button:hover {background-color: rgba(var(--secondary), 1); color: rgba(var(--primary), 1); border: 3px solid rgba(var(--secondary), 1);}
    .kk-button span {display: inline-block; vertical-align: middle; font-size: 1.2rem;}
    .kk-button::before {content: ""; display: inline-block; vertical-align: middle; width: 0; height: 100%;}
    .kk-button.selected {background-color: rgba(var(--secondary), 1); color: rgba(var(--primary), 1); border: 3px solid rgba(var(--secondary), 1);}

    /*/////////////////////////////////*/
    /*/////////// RESPONSIVE //////////*/
    /*/////////////////////////////////*/

    @media (max-width: 400px) {
        .kk-button span {font-size: 1rem;}
        .kk-button {padding: 0 15px;}
    }

</style>