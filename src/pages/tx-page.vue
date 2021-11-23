<template>
    <section>
        <div class="dynCont center">
            <h2>{{ txMessage }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: "tx-page",
    props: {
      txMessage: String
    }
}
</script>

<style scoped>

</style>