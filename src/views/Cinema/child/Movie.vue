<template>
    <div class="movie">
            <div class="title">近期最受期待</div>
            <Scroller style="height: 9.625rem">
                <div class="content" :style="{width:Widths}">
                    <div class="list" v-for="(list, index) in cinemaList" :key="list.id">
                        <div class="xing" @tap="Click(index)">
                            <span :class="{active: index === currentIndex}"></span>
                            <!-- <img v-else src="../../assets/imgs/want-to-watch-red.png" alt=""> -->
                        </div>
                        <img :src="list.image" alt="">
                        <span class="movie_name">{{ list.movie }}</span>
                        <span class="date">4月30日</span>
                    </div>
                </div>
            </Scroller>
        </div>
</template>

<script>
export default {
    name: 'Movie',
    data() {
        return {
            Widths: '0px',
            isShow: [],
            currentIndex: 0,
            cinemaList: [
                {
                    id: 1,
                    image: require('../../../assets/imgs/beipinghuiguan.jpg'),
                    movie: '大红包',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3'
                },
                {
                    id: 2,
                    image: require('../../../assets/imgs/beipinghuiguan.jpg'),
                    movie: '北平会馆',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3'
                },
                {
                    id: 3,
                    image: require('../../../assets/imgs/zhiweiyujianni.jpg'),
                    movie: '只为遇见你',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3'
                },
                {
                    id: 4,
                    image: require('../../../assets/imgs/beipinghuiguan.jpg'),
                    movie: '大红包',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3'
                },
            ],
        }
    },
    mounted() {
        // let ss = this.Widths =0.75 * (this.cinemaList.length + 1) + 4.6875 * this.cinemaList.length + 'rem'
        this.Widths = 0.75 * (this.cinemaList.length + 1) + 4.6875 * this.cinemaList.length + 'rem'
        
    },
    methods: {
        Click(index) {
            console.log(index);
            this.isShow = 1
        }
    },
}
</script>

<style lang="scss" scoped>
    .movie {
            margin-top: 3rem;
            height: 11rem;
            .title {
                width: 80%;
                height: 1.5625rem;
                line-height: 1.5625rem;
                font-size: .8125rem;
                margin-left: .625rem;
            }
            .content {
                margin-top: .3125rem;
                height: 8.625rem;
            }
            .list {
                position: relative;
                float: left;
                width: 4.6875rem;
                margin-left: 0.75rem;
                .xing {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 1.25rem;
                    height: 1.25rem;
                    background-color: rgba(61,63,71,.8);
                    /* background: red; */
                    border-bottom-right-radius: .625rem;
                    .active {
                        background-image: url('../../../assets/imgs/want-to-watch-red.png');
                    }
                    span {
                        display: block;
                        width: .9375rem;
                        height: .9375rem;
                        background-image: url('../../../assets/imgs/want-to-watch-hover.png');
                        background-size: .9375rem .9375rem;
                    }
                }
                img {
                width: 100%;
                height: 6.875rem;
                }
                span {
                    display: block;
                    width: 100%;
                }
                .movie_name {
                    /* 15px => 0.9375rem */
                    height: .9375rem;
                    line-height: .9375rem;
                    font-weight: 600;
                    font-size: .8125rem;
                    /* 超出部分省略号显示 */
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .date {
                    height: .8125rem;
                    line-height: .8125rem;
                    font-size: .625rem;
                }
            }
        }
</style>