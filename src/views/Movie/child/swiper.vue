<template>
    <div id="box">
        <swiperer>
            <div class="swiper-slide" v-for="item in swiperImg" :key="item.id">
                <img :src="item.imgs" alt="">
            </div>
        </swiperer>
        </div>
</template>
<script>
import swiperer from '@/components/Swiperer'

export default {
    name: 'swiper',
    data() {
        return {
            swiperImg: [
                {
                    id: 1,
                    imgs: require('../../../assets/imgs/swiper-one.jpg')
                },
                 {
                     id: 2,
                    imgs: require('../../../assets/imgs/swiper-tow.jpg')
                },
                 {
                     id: 3,
                    imgs: require('../../../assets/imgs/swiper-three.jpg')
                },
                 {
                     id: 4,
                    imgs: require('../../../assets/imgs/swiper-four.webp')
                },
                 {
                     id: 5,
                    imgs: require('../../../assets/imgs/swiper-five.webp')
                },
                 {
                     id: 6,
                    imgs: require('../../../assets/imgs/swiper-six.webp')
                },
            ],
            
        }
    },
    components: {
        swiperer
    }
}
</script>

<style lang="scss" scoped>
    #box {
        height: 11.75rem;
        div {
            img {
                width: 100%;
                height: 11.75rem;
            }
        }
        .swiper-pagination-bullet-active {
            background-color: pink;
        }
        }
</style>