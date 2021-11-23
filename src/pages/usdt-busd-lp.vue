<template>
    <section class="kk-section">
        <div class="kk-section-top">
            <div class="dynCont left">
                <span class="kk-h5 ma-0">1 Item</span>
            </div>
        </div>
        <div class="kk-section-cont">
            <div class="dynCont left">
                <form>
                    <span class="kk-h5">Available USDT / BUSD LP Tokens: <span id="bnbBalance">0.00</span></span>
                    <div class="formGroup">
                        <input-box class="flex-3" type="text" placeholder="Insert Amount Here"></input-box>
                    </div>
                    <span class="kk-h5 mt-7">Locking Time (BETWEEN 1 AND 365 DAYS)</span>
                    <div class="btnGroup flex mt-3">
                        <generic-button title="1 DAY" :selected="button_states['1_day']" @clicked="clickButton('1_day')" selectable></generic-button>
                        <generic-button title="1 WEEK" :selected="button_states['1_week']" @clicked="clickButton('1_week')" selectable></generic-button>
                        <generic-button title="1 MONTH" :selected="button_states['1_month']" @clicked="clickButton('1_month')" selectable></generic-button>
                        <generic-button title="1 YEAR" :selected="button_states['1_year']" @clicked="clickButton('1_year')" selectable></generic-button>
                    </div>
                    <div class="btnGroup flex mt-10 mw-450">
                        <generic-button @clicked="open('confirmation')" title="Stake"></generic-button>
                        <generic-button @clicked="extractEarnings()" title="Get Earnings"></generic-button>
                        <generic-button title="Unstake" disabled></generic-button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import genericButton from "@/components/genericButton";
import inputBox from "@/components/inputBox";
export default {
    name: "usdt-busd-lp",
    components: {inputBox, genericButton},
    methods: {
        open(key) {
            this.$emit("open", key);
        },
        clickButton(index){
            for(let i in this.button_states){
                if(i === index){
                    this.button_states[i] = !this.button_states[i];
                }else{
                    this.button_states[i] = false;
                }
            }
        }
    },
    data: () => ({
        button_states: {
             "1_day":    false,
            "1_week":   false,
            "1_month":  false,
            "1_year":   false,
        }
    })
}
</script>

<style scoped>

</style>
