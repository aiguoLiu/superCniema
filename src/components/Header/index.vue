<template>
    <div id="header">
        <slot name="left"></slot>
        <slot name="text"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

    #header {
        position: fixed;
        top: 0;
        width: 100%;
        box-sizing: border-box;
        height: 3.125rem;
        color: #ffffff;
        background:pink;
        border-bottom: .0625rem solid #ffffff;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
    }
</style>