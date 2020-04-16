<template>
    <div id="about_moive">
        <div class="title">
            相关电影片
        </div>
        <div class="moives">
            <div class="long">
                <div class="li" v-for="item in about" :key="item.id">
                    <div class="bk">
                        <img :src="item.imgs" alt="">
                    </div>
                    <p>Super评分{{ item.number }}</p>
                    <span>{{ item.moive_name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutMoive',
    data() {
        return {
            about: [
                {
                    id: 1,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '8.5',
                    moive_name: '爱情公寓4'
                },
                {
                    id: 2,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '8.5',
                    moive_name: '爱情公寓3'
                },
                {
                    id: 3,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '9.5',
                    moive_name: '爱情公寓2'
                },
                {
                    id: 4,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '8.5',
                    moive_name: '爱情公寓'
                },
                {
                    id: 5,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '8.5',
                    moive_name: '爱情公寓4'
                },
                {
                    id: 6,
                    imgs: require('../../../assets/imgs/aiqinggongyufour.jpg'),
                    number: '8.5',
                    moive_name: '爱情公寓4'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    #about_moive {
        width: 100%;
        .title {
            // 30px
            width: 80%;
            height: 1.875rem;
            line-height: 1.875rem;
            font-size: .875rem;
            margin-left: .625rem;
            font-weight: 600;
            color: #444444;
        }
        .moives {
            // 150px
            height: 9.375rem;
            width: 95%;
            margin-left: .6rem;
            .long {
                display: flex;
                white-space: nowrap;
                overflow-x: scroll;
                
                .li {
                    position: relative;
                    width: 6.25rem;
                    margin-left: .82rem;
                    img {
                        width: 6.25rem;
                        height: 7.8125rem;
                    }
                    p {
                        position: absolute;
                        bottom: 1.5rem;
                        width: 100%;
                        height: 1.25rem;
                        line-height: 1.25rem;
                        // background-color: rgba(0, 0,0, .5);
                        box-shadow: 0 -1.875rem 2.5rem rgba(0, 0,0, .6) inset ;
                        font-size: .75rem;
                        color: #faaf00;
                        text-align: center;
                    }
                    span {
                        display: block;
                        height: 1.25rem;
                        line-height: 1.25rem;
                        text-align: center;
                        font-size: .875rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>