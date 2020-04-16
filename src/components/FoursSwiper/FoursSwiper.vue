<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'Swiperer',
    // 通过props来接受父亲传来的参数
    //当一个组件中有两个swiper时可以通过传递类名来指定区分swiper
    props: ["actorswiper"],
    mounted() {
        const swipers = new Swiper('.' + this.actorswiper, {
            slidesPerView:4,
            spaceeBetween:30,
            freeMode:true
        })
    }
}
</script>

<style lang="scss" scoped>
    
</style>