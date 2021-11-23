<template>
    <section>
        <div class="dynCont">
            <h2>About Us</h2>
            <br>
            <p>
                We are a group of crypto enthusiasts, and developers from around the globe <br>
                building fun and
                experimental projects. Our first of many projects is 2K Finance (TWOK).<br> 2K is a DeFi
                powerhouse built on the Binance Smart Chain. <br>
                <br>
                Our goal is to help investors generate passive income through an optimally structured financial loop.<br>
            </p>
            <br>
            <h2>Meet the Team:</h2>
            <ul>
                <li>Admin/Dev/CTO: Douw - South-Africa</li>
                <li>Infrastructure/Websecurity: Leon - Ireland</li>
                <li>Back End/Design: Sbu - South-Africa </li>
                <li>Front End/Design: Mitch - United States</li>
                <li>Marketing/Research: Sandro - Germany</li>
                <li>Marketing/Research: Mareli - South-Africa</li>
            </ul>
            <br>
            <h2 style="font-size: 20px">ENTER THE LOOP</h2>

        </div>
        <div class="btnGroup flex mw-500">

                <generic-button href="https://t.me/TWOK_Finance" title="Telegram"></generic-button>
                <generic-button href="https://twitter.com/twokfinance" title="Twitter"></generic-button>
                <generic-button href="https://web.facebook.com/2kfinance" title="Facebook"></generic-button>
                <generic-button href="https://www.youtube.com/channel/UCU66N0wYmf93PwA6EaN1zAA" title="Youtube"></generic-button>
                <generic-button href="https://2kfinance.medium.com/" title="Medium"></generic-button>
                <br>
            </div>
    </section>
</template>

<script>
import genericButton from "@/components/genericButton";
export default {
    name: "about",
    components: {genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
        close(key) {
            this.$emit("close", key);
        },
    },
}
</script>

<style scoped>

</style>
