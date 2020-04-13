<template>
    <div class="movie_list">
            <Scroller style="height:19.875rem">
                <ul>
                    <li v-for="item in cinemaList" :key="item.id">
                        <div class="list">
                            <div class="city_name">
                                {{ item.nm }}  ({{ item.city }}店)
                            </div>
                            <div class="address">
                                {{ item.add }}
                            </div>
                            <div class="little_box">
                                <p class="one">{{ item.one }}</p>
                                <p class="one">{{ item.tow }}</p>
                                <p class="tow">{{ item.three }}</p>
                                <p class="tow">{{ item.four }}</p>
                            </div>
                            <div class="distance">
                                {{ item.distance }}km
                            </div>
                        </div>
                    </li>
                </ul>
            </Scroller>
            
        </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
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
                {
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
    }
}
</script>

<style lang="scss" scoped>
    .movie_list {
            width: 100%;
            height: 19.875rem;
            ul {

                li {
                    width: 100%;
                    height: 6.25rem;
                    .list {
                        position: relative;
                        width: 100%;
                        height: 6.25rem;
                        div {
                            margin-left: .9375rem;
                        }
                        .city_name {
                            width: 75%;
                            height: 2.1875rem;
                            line-height: 2.1875rem;
                            font-weight: 600;
                        }
                        .address {
                            width: 80%;
                            height: 1.25rem;
                            font-size: .75rem;
                        }
                        .little_box {
                            width: 75%;
                            height: 1.5625rem;
                            p {
                                display: inline-block;
                                font-size: .625rem;
                                margin: 0 .3125rem;
                                padding: .125rem;
                                border-radius: .125rem;
                            }
                            .one {
                                color: #589daf;
                                border: 1px solid #589daf;
                            }
                            .tow {
                                color: #f90;
                                border: 1px solid #f90;
                            }
                        }
                        .distance {
                            position: absolute;
                            top: 30%;
                            right: 1.0625rem;
                            width: 3.125rem;
                            height: 1.5625rem;
                            line-height: 1.5625rem;
                            text-align: center;
                            font-size: .875rem;
                        }
                    }
                }
            }
        }
</style>