<template>
    <section>
        <div class="dynCont center">
            <h2>{{ errorMessage }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: "input-error-page",
    props: {
      errorMessage: String
    }
}
</script>

<style scoped>

</style>