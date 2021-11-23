<template>
  <div style="height: 5vh">
    <section class="kk-input inline">
      <input
        :type="type"
        :placeholder="placeholder"
        v-bind:value="getValue(accountBalance)"
        @change="onChange($event)"
      />
    </section>
    <slider v-model="tokenValue" class="vue3-slider" color="#B3BFDC" track-color="#000000" :height="12" :max="99" />
  </div>
</template>

<script>
import slider from "vue3-slider"

export default {
  name: "inputBox",
  components: { slider },
  props: {
    type: String,
    placeholder: String,
    accountBalance: Number,
  },
  data: () => ({
    tokenAmount: "",
    tokenValue: 0
  }),
  methods: {
    onChange(event) {
      this.tokenAmount = event.target.value;
      this.$emit("vModel", event.target.value);
    },
    getValue(value) {
      let currentValue = parseFloat((value * (this.tokenValue/100)).toFixed(4));
      this.$emit("vModel", currentValue)

      return currentValue;
    }
  },
};
</script>

<style scoped>
.kk-input {
  height: 35px;
  outline: 3px solid rgba(var(--secondary), 1);
  margin: 1.5px;
  font-family: "Geneva", sans-serif;
  font-size: 0;
  width: 71.2%;
}

.kk-input input {
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  outline: none;
  font-family: inherit;
  height: 70%;
  background-color: transparent;
  padding: 0 15px;
  font-size: 1rem;
  color: rgba(var(--secondary), 1);
}

.kk-input input::placeholder {
  color: rgba(var(--secondary), 0.5);
  font-size: 1rem;
  font-family: inherit;
}
</style>