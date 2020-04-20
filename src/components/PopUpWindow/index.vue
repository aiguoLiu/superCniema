<template>
    <div id="window">
        <div class="image">
            <img src="../../assets/imgs/dui.png" alt="">
        </div>
        <div class="text">
            <span>已标记想看</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUpWindow',

}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    #window {
        position: fixed;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 6.25rem;
        background-color: hsla(0, 0%, 7%, .7);
        border-radius: .625rem;
        color: #fff;
        text-align: center;
        padding: .625rem;
        z-index: 100;
        .image {
            width: 3.125rem;
            margin: 1.25rem 1.8rem .75rem;
            img {
                width: 3.125rem;
            }
        }
        .text {
            width: 100%;
            line-height: 1.25rem;
            font-size: 1rem;
        }
    }
</style>