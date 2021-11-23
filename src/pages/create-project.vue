<template>
    <section>
        <form>
            <div class="dynCont left">
                <span class="kk-h5">Project Name</span>
                <input-box type="text" placeholder="Type name here..."></input-box>

                <span class="kk-h5 mt-5">BSC Contract Address</span>
                <input-box type="text" placeholder="Paste address here..."></input-box>

                <span class="kk-h5 mt-5">Website</span>
                <input-box type="text" placeholder="Type name here..."></input-box>

                <span class="kk-h5 mt-5">Date Launched</span>
                <input-box type="text" placeholder="Type date here..."></input-box>

                <span class="kk-h5 mt-5">Link to logo 200x200 png</span>
                <input-box type="text" placeholder="Paste link here..."></input-box>
                
                <span class="kk-h5 mt-5">Description</span>
                <textAreaInput  placeholder="Type description here..."></textAreaInput>

                <div class="btnGroup center">
                    <generic-button @clicked="close('create-project')" title="Cancel"></generic-button>
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
    name: "create-project",
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