<template>
    <div id="now">
        <Scroller style="height:18.3rem">
            <div class="box">
                <span class="text">热门影人</span>
                <div class="image">
                    <Scroller style="height: 8.75rem">
                        <div class="content" :style="{width:Widths}">
                            <div class="list" v-for="item in movieimgs" :key="item.id">
                                <img :src="item.imgs" alt="">
                                <span class="name">{{ item.nm }}</span>
                            </div>
                        </div>
                    </Scroller>
                </div>
                <div class="kongge"></div>
                <div class="page">
                    <span class="page_title">娱乐热点</span>
                    <div class="page_text">
                        <div class="text" 
                            v-for="item in movieimgs" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
        </Scroller>
        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'now',
    data () {
        return {
            // movieLists: []
            //虚假数据
            movieimgs: [
                {
                    id: 1,
                    imgs: require('../../../assets/imgs/baobeier.jpg'),
                    nm: '包贝尔',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 2,
                    imgs: require('../../../assets/imgs/mating.jpg'),
                    nm: '马丁',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 3,
                    imgs: require('../../../assets/imgs/huxia.jpg'),
                    nm: '胡夏',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 4,
                    imgs: require('../../../assets/imgs/mating.jpg'),
                    nm: '王小利',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 5,
                    imgs: require('../../../assets/imgs/mating.jpg'),
                    nm: '陈浩明',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 6,
                    imgs: require('../../../assets/imgs/mating.jpg'),
                    nm: '陈浩明',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
                {
                    id: 7,
                    imgs: require('../../../assets/imgs/mating.jpg'),
                    nm: '陈浩明',
                    title: '1. 能打能怼能抗疫，除了威尔·史密斯还有谁！'
                },
            ],
            Widths: '0px'
        }
    },
    mounted() {

        let ss = this.Widths =0.75 * (this.movieimgs.length + 1) + 4.6875 * this.movieimgs.length + 'rem'
        console.log(ss);
        
        // this.axios.get('api/movieOnInfoList?cityId=10').then((res) => {
        //     console.log(res);
        //     let msg = res.data.msg
        //     if(msg === 'ok') {
        //         this.movieLists = res.data.data.movieList
        //     }
        // })
    }
}
</script>

<style lang="scss" scoped>
    #now {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 18.3rem;
        .box {
            width: 100%;
            .text {
                display: inline-block;
                width: 80%;
                height: 1.875rem;
                line-height: 1.875rem;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 1.25rem;
            }
            .image {
                width: 100%;
                height: 8.75rem;
                overflow: hidden;
                .content {
                    height: 8.75rem;
                    .list {
                        float: left;
                        width: 4.6875rem;
                        margin-left: .75rem;
                        img {
                            display: block;
                            width: 4.6875rem;
                            height: 6.875rem;
                        }
                        .name {
                            display: block;
                            width: 100%;
                            height: 1.25rem;
                            line-height: 1.25rem;
                            text-align: center;
                            font-size: .8125rem;
                            margin-top: .625rem;
                        }
                    }
                }
            }
            .kongge {
                width: 100%;
                height: .625rem;
                background: #e0e0e0;
            }
            .page {
                width: 100%;
                .page_title {
                    width: 90%;
                    height: 1.5625rem;
                    line-height: 1.5625rem;

                }
                .page_text {
                    width: 90%;
                    .text {
                        font-size: .8125rem;
                        font-weight: 200;
                        text-overflow: ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                    }
                }
            }
        }
    }
</style>