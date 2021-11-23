<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">
                  DeFi + P2E Gaming + Farming<br>
                </span>
            </div>
        </div>
        <div class="kk-section-cont">
            <!-- <icon-grid :grid-items="gridItems" @open="open"></icon-grid> -->
            <h3 style="font-size: 25px">MoonTimer</h3>
            <br>
            <p>
              MoonTimer aims to become the leading P2E gaming and farming platform, powered by a unique and innovative game called the MoonTimer. <br>
              <br>
              Play, earn and win rewards paid out in BUSD, all controlled by smart contracts <br>
            </p>
            
        </div>
        <div class="btnGroup flex mw-500">

                <generic-button href="https://moontimer.net/" title="Website"></generic-button>
                <generic-button href="https://t.me/moontimergame" title="Telegram"></generic-button>
                <generic-button href="https://twitter.com/moontimergame" title="Twitter"></generic-button>
                <br>
                <br>
        </div>
    </section>
</template>

<script>
// import iconGrid from "@/components/iconGrid";
import genericButton from "@/components/genericButton";
export default {
name: "moontimer",
    components: {genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
    data: () => ({
        gridItems: [
            {
                title: "MTG Vault",
                icon: "vault-icon.png",
                key: "",
            },
            
        ],
    })
}
</script>

<style scoped>

</style>

