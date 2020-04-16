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
            autoplay: true,
            autoplay: {
                disableOnInteraction: false,
                delay:1500
            },
            pagination: {
                el: '.swiper-pagination'
                // dynamicBullets: true,
                //内容很多时分页器小点隐藏
                // dynamicMainBullets: 1 
                //一个主小点
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        .swiper-pagination-bullet{
            background: #fff;
            opacity: 1;
        }   
        height: 11.75rem;
        --swiper-theme-color: #ff6600;
        --swiper-pagination-color: #00ff33;/* 两种都可以 */
    }
    
</style>