<template>
    <section class="kk-textarea">
        <textarea :name="name" cols="35" rows="8" :placeholder="placeholder"></textarea>
    </section>
</template>

<script>
export default {
    name: "textAreaInput",
    props: {
        placeholder: String,
        name: String,
    },
}
</script>

<style scoped>
.kk-textarea {outline: 3px solid rgba(var(--secondary), 1); margin: 1.5px; font-family: 'Geneva', sans-serif; font-size: 0;}
.kk-textarea textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    outline: none;
    font-family: inherit;
    background-color: transparent;
    padding: 10px 15px;
    font-size: 1rem;
    color: rgba(var(--secondary), 1);
    height: 100px;
    min-height: 100px;
    resize: vertical;
}

.kk-textarea textarea::placeholder {color: rgba(var(--secondary), 0.5); font-size: 1rem; font-family: inherit;}
</style>