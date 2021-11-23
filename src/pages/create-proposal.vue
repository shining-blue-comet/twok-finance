<template>
    <section>
        <form>
            <div class="dynCont left">
                <span class="kk-h5">Project Name</span>
                <input-box type="text" placeholder="Type name here..."></input-box>

                <span class="kk-h5 mt-5">Proposal</span>
                <input-box type="text" placeholder="Type name here..."></input-box>

                <span class="kk-h5 mt-5">Start Date</span>
                <input-box type="text" placeholder="Type date here..."></input-box>

                <span class="kk-h5 mt-5">End Date</span>
                <input-box type="text" placeholder="Type date here..."></input-box>

                <span class="kk-h5 mt-5">Description</span>
                <text-area-input type="text" placeholder="Type description here..."></text-area-input>

                <div class="btnGroup center">
                    <generic-button @clicked="close('create-proposal')" title="Cancel"></generic-button>
                    <generic-button title="Create"></generic-button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import InputBox from "@/components/inputBox";
import TextAreaInput from "@/components/textAreaInput";
import GenericButton from "@/components/genericButton";
export default {
    name: "create-proposal",
    components: {GenericButton, TextAreaInput, InputBox},
    methods: {
        close(key) {
            this.$emit("close", key);
        }
    },
}
</script>

<style scoped>

</style>