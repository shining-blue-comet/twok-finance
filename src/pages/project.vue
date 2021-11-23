<template>
    <section class="kk-section">
        <div class="kk-section-top noFlex pt-1 pb-5">
            <div class="kk-section-column mw-350 pb-0">
                <div class="kk-section-col">
                    <span class="h5 ma-0">Author : </span>
                    <p class="ma-0">Jason S Davis</p>
                </div>
                <div class="kk-section-col">
                    <span class="h5 ma-0">Start Date : </span>
                    <p class="ma-0">March 10 2021</p>
                </div>
                <div class="kk-section-col">
                    <span class="h5 ma-0">End Date : </span>
                    <p class="ma-0">March 10 2021</p>
                </div>
            </div>
            <loader class="mt-1" percentage="35" title="Yes" small showValue></loader>
            <loader class="mt-2" percentage="20" title="No" small showValue></loader>
        </div>
        <div class="kk-section-cont">
            <div class="dynCont">
                <h5>This is a heading</h5>
                <p>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut
                    dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur
                    diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit
                    amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Duis gravida eget neque vel vulputate.Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra.
                </p>
                <div class="btnGroup">
                    <generic-button title="Vote No"></generic-button>
                    <generic-button title="Vote Yes"></generic-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Loader from "@/components/loader";
import GenericButton from "@/components/genericButton";
export default {
    name: "project",
    components: {GenericButton, Loader}
}
</script>

<style scoped>

</style>