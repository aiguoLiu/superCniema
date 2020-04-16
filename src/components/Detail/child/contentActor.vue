<template>
    <div class="content_actor">
        <div class="actor_name">
            <span class="actor_people">演职人员</span>
            <span class="sums">
                <p class="sum">全部10</p>
                <i class="iconfont">&#xe641;</i>
            </span>
        </div>
        <div class="actor_imgs">
            <div class="long">
                <div class="image" 
                    v-for="item in actors" :key="item.id">
                    <img :src="item.imgs" alt="">
                    <div class="actor_peo">{{ item.actor_names }}</div>
                    <div class="actor_jia">
                        <p>饰</p>
                        <span>{{ item.actor_jia }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentActor',
    data() {
        return {
            actors: [
                {
                    id: 1,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 2,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 3,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 4,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 5,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 6,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 7,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
                {
                    id: 8,
                    imgs: require('../../../assets/imgs/zhugedali.jpg'),
                    actor_names: '成果',
                    actor_jia: '诸葛大力'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/fonts.css';
    * {
        margin: 0;
        padding: 0;
    }
    .content_actor {
        // 200px
        height: 12.5rem;
        margin-top: .625rem;
        .actor_name {
            // 30px
            height: 1.875rem;
            color: #cccccc;
            .actor_people {
                float: left;
                width: 20%;
                height: 1.875rem;
                line-height: 1.875rem;
                text-align: center;
                font-size: .9375rem;
                color: #ffffff;
            }
            .sums {
                float: right;
                width: 40%;
                height: 1.875rem;
                line-height: 1.875rem;
                p {
                    float: left;
                    width: 3.75rem;
                    height: 1.875rem;
                    line-height: 1.875rem;
                    text-align: right;
                    font-size: .75rem;
                    margin-left: 3.4375rem;
                }
                i {
                    float: right;
                    width: 1.25rem;
                    height: 1.875rem;
                    line-height: 1.875rem;
                    text-align: center;
                    transform: rotate(-180deg);
                    font-size: .625rem;
                    margin-right: .45rem;
                }
            }
        }
        .actor_imgs {
            width: 93%;
            height: 10rem;
            margin-top: .625rem;
            .long {
                display: flex;
                overflow-x: scroll;
                margin-left: .5rem;
                width: 100%;
                height: 100%;
                .image {
                    width: 5rem;
                    height: 100%;
                    margin-left: 1rem;
                    img {
                        width: 5rem;
                        height: 7.1875rem;
                    }
                    div {
                        height: 1.25rem;
                        line-height: 1.25rem;
                        text-align: center;
                        color: #cccccc;
                    }
                    .actor_peo {
                        font-size: .875rem;
                        font-weight: 600;
                        color: #ffffff;
                    }
                    .actor_jia {
                        font-size: .75rem;
                        p {
                            float: left;
                            margin-left: .625rem;
                            
                        }
                        span {
                            float: right;
                            margin-right: .125rem;
                        }
                    }
                }
            }
        }
    }
</style>