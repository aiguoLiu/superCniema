<template>
    <div class="swiper-container" ref="swiperer">
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
    data() {
        return {
            
        }
    },
    mounted() {
        const swipers = new Swiper(this.$refs.swiperer, {
            loop: true,
            speed: 300,
            autoplay: {
                disableOnInteraction: false,
                delay:1500
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        height: 11.75rem;
    }
</style>