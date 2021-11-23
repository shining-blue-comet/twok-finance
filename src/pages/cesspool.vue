<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">
                  EAT SHIT, GET RUGGED<br>
                </span>
            </div>
        </div>
        <div class="kk-section-cont">
            <icon-grid :grid-items="gridItems" @open="open"></icon-grid>
            <h3 style="font-size: 25px">CESSPOOL</h3>
            <br>
            <p>
              Home of “Demonomics” the world's first fud-2-earn (F2E) protocol. <br>
              <br>
              Do you have what it takes? <br>
            </p>
            
        </div>
        <div class="btnGroup flex mw-500">

                <generic-button href="https://cesspool.company/" title="Website"></generic-button>
                <generic-button href="https://t.me/cesspool_company" title="Telegram"></generic-button>
                <generic-button href="https://twitter.com/cesspoo68232544" title="Twitter"></generic-button>
                <br>
                <br>
        </div>
    </section>
</template>

<script>
import iconGrid from "@/components/iconGrid";
import genericButton from "@/components/genericButton";
export default {
name: "cesspool",
    components: {genericButton, iconGrid},                
    methods: {
        open(key) {
            this.$emit("open", key);
        }
    },
    data: () => ({
        gridItems: [
            {
                title: "CESSPOOL LP Vault",
                icon: "vault-icon.png",
                key: "cess-lp",
            },
            {
                title: "CESS4CESS Vault",
                icon: "vault-icon.png",
                key: "cess-cess",
            },
    //        {
    //            title: "DXM4CESS Vault",
    //            icon: "vault-icon.png",
    //            key: "dxm-cess",
    //        },
            
        ],
    })
}
</script>

<style scoped>

</style>

