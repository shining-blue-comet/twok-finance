<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="kk-section-column pt-1 pb-1">
                <div class="kk-section-col">
                    <span class="h5 ma-0">Owner : </span>
                    <p class="ma-0">Jason S Davis</p>
                </div>
                <div class="kk-section-col">
                    <span class="h5 ma-0">Coins : </span>
                    <p class="ma-0">72 2k coin</p>
                </div>
            </div>
        </div>
        <div class="kk-section-cont">
            <loader percentage="35" title="Mined 2 K Coin"></loader>
        </div>
    </section>
</template>

<script>
import loader from "@/components/loader";
export default {
name: "my-wallet",
    components: {loader}
}
</script>

<style scoped>

</style>