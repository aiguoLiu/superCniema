<template>
    <div id="wait">
        <Scroller :handleToScroll="handleToScroll" 
                :headleToTouchend="headleToTouchend"
                style="height:18.3rem">
            <ul>
                <div id="wait_li" :class="{pulldown:pdactive}">
                    <span class="text">{{ pulldown }}</span>
                    <i class="iconfont" v-show="icon">&#xe66c;</i>
                </div>
                <li v-for="(item, index) in waitList" :key="item.id">
                    <div class="date">{{ item.mon }}月{{ item.day }}日 周{{ item.week }}</div>
                    <div class="content" >
                        <div class="imgs" @tap="handleClick(item.id)">
                            <img :src="item.imgs" alt="">
                        </div>
                        <div class="text">
                            <h2>{{ item.title }}</h2>
                            <span class="num"><p>{{ item.num }}</p>人想看</span>
                            <span class="actor">主演：<p>{{ item.actor }}</p></span>
                            <span class="mon"><p>{{ item.year }}-0{{item.mon}}-{{item.day}}</p>上映</span>
                        </div>
                        <span id="want" v-show="!item.isTrue" @tap="handleClickWant(index)">想看</span>
                        <p id="wantCopy" v-show="item.isTrue" @tap="handleClickNowant(index)">已想看</p>
                    </div>
                </li>
            </ul>
        </Scroller>
        <PopWindow v-show="isShow"/>
    </div>
</template>

<script>
import axios from 'axios'

import PopWindow from '@/components/PopUpWindow'

export default {
    name: 'wait',
    props: '',
    data() {
        return {
            waitList: [
                {
                    id: 1,
                    imgs: require('../../../assets/imgs/dahongbao.jpg'),
                    title: '大红包',
                    num: '789',
                    actor: '赵鸿飞,雷牧,张艺兴，诸葛大力',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 2,
                    imgs: require('../../../assets/imgs/meirenyu.jpg'),
                    title: '恋上美人鱼',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 3,
                    imgs: require('../../../assets/imgs/beipinghuiguan.jpg'),
                    title: '北平会馆',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 4,
                    imgs: require('../../../assets/imgs/zhiweiyujianni.jpg'),
                    title: '只为遇见你',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 5,
                    imgs: require('../../../assets/imgs/liulangdiqiu.jpg'),
                    title: '流浪地球',
                    num: '11789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '四',
                    isTrue: false
                },
                {
                    id: 6,
                    imgs: require('../../../assets/imgs/nvshengsushe.jpg'),
                    title: '女生宿舍',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 7,
                    imgs: require('../../../assets/imgs/wufengyeqilang.jpg'),
                    title: '无风也起浪',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 8,
                    imgs: require('../../../assets/imgs/mangmaifengzhang.jpg'),
                    title: '莽麦疯长',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 9,
                    imgs: require('../../../assets/imgs/meirenyu.jpg'),
                    title: '82号古宅',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                },
                {
                    id: 10,
                    imgs: require('../../../assets/imgs/meirenyu.jpg'),
                    title: '82号古宅',
                    num: '789',
                    actor: '赵鸿飞,雷牧',
                    year: '2020',
                    mon: '5',
                    day: '15',
                    week: '五',
                    isTrue: false
                }
            ],
            myheight: {
                height: '0px'
            },
            pulldown: '',
            icon: false,
            pdactive: false,
            isShow: false
        }
    },
    components: {
        PopWindow
    },
    mounted() {
        // axios({
        //     url: "http://m.maoyan.com/ajax/moreComingList?ci=217&token=&limit=10&movieIds=665702%2C1318812%2C1208919%2C1238922%2C1301478%2C1301774%2C1241385%2C1233290%2C1294417%2C1197077&optimus_uuid=5C7E0C207AE711EA9A65AFEB74502EE154D4D81E648F47678313DD36098C6E1E&optimus_risk_level=71&optimus_code=10",
           
        // }).then( res => {
        //     console.log(res);
            
        // })
        // 让数据加载完毕后干什么事情
        // this.$nextTick( () =>{ })
        

        // scroll.on('scroll', (pos) => {
        //     // console.log('scroll');
        //     if(pos.y > 50){
        //         this.pulldown = '正在跟新中'
        //     }
        // })
        // scroll.on('touchEnd',(pos) => {
        //     // console.log('touchend');
        //     if(pos.y > 50){
        //         //这里可以重新发送ajax请求新数据
        //         this.pulldown = '更新成功'
        //         setTimeout(() => {
        //             this.pulldown = ''
        //         },2000)
        //     }
        // })

        
    },
    methods: {
        handleClickWant(index) {
            this.isShow = true
            this.waitList[index].isTrue = true
            setTimeout( () => {
                this.isShow = false
            },600)
        },
        handleClickNowant(index) {
            this.waitList[index].isTrue = false
        },
        handleToScroll(pos) {
            if(pos.y > 5){
                this.pulldown = '正在跟新中...'
                this.icon = true
                this.pdactive = true
            }
        },
        headleToTouchend(pos) {
             if(pos.y > 10){
                //这里可以重新发送ajax请求新数据
                setTimeout(() => {
                    this.pulldown = '更新成功'
                    this.icon = false
                    setTimeout(() => {
                    this.pdactive = false
                    this.pulldown = ''
                },1000)
                },2000)
                
                
            }
        },

        handleClick(movieId) {
            this.$router.push('/movie/detail/' + movieId)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    #wait{
        ul {
            #wait_li {
                width: 100%;
                span {
                    display: inline-block;
                }
                i {
                    display: inline-block;
                    width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 2rem;
                    text-align: center;
                    animation: rotating 2s linear infinite;
                }
                @keyframes rotating {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(1turn);
                    }
                }
                .text {
                    width: 30%;
                    line-height: 2.5rem;
                    margin-left: 35%;
                    font-size: .9375rem;
                    font-weight: 600;
                    text-align: center;
                }
            }
            .pulldown {
                height: 2.5rem;
            }
            li {
                position: relative;
                width: 100%;
                height: 8.4375rem;
                .date {
                    width: 80%;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    font-size: .9375rem;
                    margin-left: 1.25rem;
                }
                .content {
                    width: 100%;
                    height: 7.1875rem;
                    .imgs {
                        float: left;
                        width: 4.0625rem;
                        height: 6.25rem;
                        margin: .5rem .8125rem;
                        img {
                            width: 4.0625rem;
                            height: 6.25rem;
                        }
                    }
                    .text {
                        position: relative;
                        float: right;
                        width: 70%;
                        height: 7.1875rem;
                        margin-right: .625rem;
                        z-index: -1;
                        h2 {
                            display: block;
                            width: 100%;
                            height: 1.875rem;
                            line-height: 1.875rem;
                            font-size: 1.0625rem;
                            margin-top: .625rem;
                        }
                        .num {
                            display: block;
                            width: 100%;
                            height: 1.25rem;
                            line-height: 1.25rem;
                            font-size: .6875rem;
                            p {
                                display: inline;
                                color: #faaf00;
                                font-size: 1rem;
                                font-weight: 900;
                            }
                        }
                        .actor {
                            display: block;
                            width: 56%;
                            height: 1.25rem;
                            line-height: 1.25rem;
                            font-size: .6875rem;
                            margin-top: .1875rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            p {
                                display: inline;
                                font-size: .6875rem;
                            }
                        }
                        .mon {
                            display: block;
                            width: 100%;
                            height: 1.25rem;
                            line-height: 1.25rem;
                            font-size: .6875rem;
                            p {
                                display: inline;
                                font-size: .6875rem;
                            }
                        }
                        
                    }
                    #want {
                            position: absolute;
                            top: 30%;
                            right: .625rem;
                            width: 3.125rem;
                            height: 1.5625rem;
                            line-height: 1.5625rem;
                            background-color: #faaf00;
                            text-align: center;
                            font-size: .875rem;
                            font-weight: 700;
                            color: #fff;
                            border-radius: .25rem;
                        }
                        #wantCopy {
                            position: absolute;
                            top: 30%;
                            right: .625rem;
                            width: 3.125rem;
                            height: 1.5625rem;
                            line-height: 1.5625rem;
                            text-align: center;
                            font-size: .875rem;
                            font-weight: 700;
                            color: #cccccc;
                        }
                }
            }
        }
    }
</style>