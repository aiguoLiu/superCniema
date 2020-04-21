<template>
    <div class="movie">
            <div class="title">近期最受期待</div>
            <Scroller style="height: 9.625rem">
                <div class="content" :style="{width:Widths}">
                    <div class="list" v-for="(list, index) in cinemaList" :key="list.id">
                        <div class="xing" @tap="Click(index)">
                            <span :class="{active:list.isTrue}"></span>
                            <!-- <img v-else src="../../assets/imgs/want-to-watch-red.png" alt=""> -->
                        </div>
                        <img :src="list.image" alt="">
                        <span class="movie_name">{{ list.movie }}</span>
                        <span class="date">4月30日</span>
                    </div>
                </div>
            </Scroller>
            <pop-up-window v-show="isShow"></pop-up-window>
        </div>
</template>

<script>
import PopUpWindow from '@/components/PopUpWindow'

export default {
    name: 'Movie',
    props: '',
    data() {
        return {
            Widths: '0px',
            isShow: false,
            currentIndex: -1,
            cinemaList: [
                {
                    id: 1,
                    image: require('../../../assets/imgs/beipinghuiguan.jpg'),
                    movie: '北平会馆',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false
                },
                {
                    id: 2,
                    image: require('../../../assets/imgs/liulangdiqiu.jpg'),
                    movie: '流浪地球',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false 
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
                    distance: '2.3',
                    isTrue: false
                },
                {
                    id: 4,
                    image: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    movie: '爱情公寓4',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false
                },
                {
                    id: 5,
                    image: require('../../../assets/imgs/aiqinggongyufive.jpg'),
                    movie: '爱情公寓5',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false
                },
                {
                    id: 6,
                    image: require('../../../assets/imgs/nvshengsushe.jpg'),
                    movie: '女生宿舍',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false
                },
                {
                    id: 7,
                    image: require('../../../assets/imgs/wufengyeqilang.jpg'),
                    movie: '无风也起浪',
                    nm: '环球财富国际影城',
                    add: '宁都县中山北路95号财富时代广场四楼',
                    city: '宁都',
                    one: '退',
                    tow: '改签',
                    three: '小吃',
                    four: '折扣卡',
                    distance: '2.3',
                    isTrue: false
                },
            ],
            clickNum: 0,
            cinemaListCopy: []
        }
    },
    components: {
        PopUpWindow
    },
    mounted() {
        // let ss = this.Widths =0.75 * (this.cinemaList.length + 1) + 4.6875 * this.cinemaList.length + 'rem'
        this.Widths = 0.75 * (this.cinemaList.length + 1) + 4.6875 * this.cinemaList.length + 'rem'
        
        
        
    },
    methods: {
        Click(index) {
            this.cinemaList[index].isTrue = !this.cinemaList[index].isTrue
            this.isShow = true
            setTimeout( () => {
                this.isShow = false
            },500)
            
        },

        // pageSkip(movieId) {
        //     this.$router.push('/cinema/detail/' + movieId)
        // }
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