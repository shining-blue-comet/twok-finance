<template>
    <section>
        <div class="dynCont">
            <h5> 
                <a v-if="isDisplayTxLink" :href="`${tx}`" target="_blank" class="blink" > Check transaction status on BSCScan </a>
                <h5 v-else-if="!isDisplayTxLink"> Transaction pending... </h5>
             </h5>
        </div>
    </section>
</template>

<script>
export default {
    name: "approve",
    props: {
        isDisplayTxLink: Boolean,
        tx: String
    },
}
</script>

<style scoped>

</style>
