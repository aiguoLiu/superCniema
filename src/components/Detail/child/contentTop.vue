<template>
    <div id="content_top" :style="{height:isHas?'19.625rem':'16.625rem'}">
        <!--  -->
        <div id="title" :class="{active:isFixed}" >
            <i class="iconfont" @touchstart="handleBack">&#xe641;</i>
            <span class="tit">Super电影</span>
            <span class="p">></span>
            <span class="movie_name">
                爱情公寓5
            </span>
        </div>
        <div id="content" :class="{conActive:isFixed}">
            <div class="imgs">
                <img src="../../../assets/imgs/aiqinggongyufive.jpg" alt="">
            </div>
            <div class="txt">
                <h2 class="movie_name">
                    爱情公寓5
                </h2>
                <p class="movie_english">
                    Ipartent season5
                </p>
                <p class="type">
                    轻喜剧/爱情
                </p>
                <p class="actor_name">
                    娄艺潇/李佳航/孙艺洲
                </p>
                <p class="date">
                    2020-01-12大陆首播/45分钟 >
                </p>
                <div class="is_want">
                    <span :class="{colorActive:isColor, want:!isColor}" @click="handleClick">
                        <i :class="{bkActive:isBk, i:!isBk}"></i>
                        <p v-show="want">已想看</p>
                        <p v-show="isWant">想看</p>
                    </span>
                    <span :class="{colorActiveCopy:isColorCopy, over:!isColorCopy}" @click="handleClickOne">
                        <i></i>
                        <p v-show="over">已看过</p>
                        <p v-show="isOver">看过</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="share" v-show="isShare">
            <span>这是我记录的第{{shareNum}}部影片</span>
            <img src="../../../assets/imgs/share.png" alt="">
            <p>炫耀一下</p>
        </div>
        <div class="footer">
            <i></i>
            <p class="span">实时口碑</p>
            <p class="people">11254人看过</p>
            <span class="num">7.8</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentTop',
    data() {
        return {
            isColor: false,
            isBk: false,
            isColorCopy:false,
            isFixed: false,
            isWant: true,
            want: false,
            over: false,
            isOver: true,
            isShare: false,
            shareNum: '1',
            isHas:false
        }
    },
    methods: {

        handleClick() {
            this.isWant = !this.isWant
            this.want = !this.want
            this.over = false
            this.isOver = true
            this.isColor = !this.isColor
            this.isBk = !this.isBk
            this.isColorCopy = false
            this.isShare = !this.isShare
            this.isHas = !this.isHas
        },
        handleClickOne() {
            this.over = !this.over
            this.isOver = !this.isOver
            this.isWant = true
            this.want = false
            this.isColor = false
            this.isBk = false
            this.isColorCopy = !this.isColorCopy
            this.isShare = false
            this.isHas = false
        },
        handleBack() {
            this.$router.back()
        },

        hanleScroll() {
            let top = document.documentElement.scrollTop || document.documentElement.body
            // console.log('滚动了');
            // console.log(top);
            if(top > 0){
                // console.log('大于0了');
                this.isFixed = true
            }else{
                this.isFixed = false
            }
            
        }
    },
    mounted() {
        window.onscroll = this.hanleScroll
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/fonts.css';
    * {
        margin: 0;
        padding: 0;
    }
    #content_top {
        width: 100%;
        // height: 16.625rem;
        .active {
            position: fixed;
            top: 0;
            background-color: pink;
            transition: .5s;
        }
        .active span {
            color: white;
            font-weight: 600;
        }
        .active i {
            color: white;
        }
        #title {
            width: 100%;
            // 30px
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: 1.25rem;
            color: #e0e0ee;
            span {
                display: inline-block;
                height: 2.5rem;
                line-height: 2.5rem;
                font-size: .8125rem;
            }
            .tit {
                width: 4rem;
            }
            .movie_name {
                width: 5rem;
                text-align: center;
            }
            i {
                display: inline-block;
                width: 2.5rem;
                height: 100%;
                line-height: 2.5rem;
                text-align: center;
                font-size: 1.2rem;
                margin-left: 0.4rem;
            }
        }
        .conActive {
            padding-top: 2.5rem;
        }
        #content {
            height: 11.25rem;
            .imgs {
                float: left;
                height: 100%;
                width: 35%;
                img {
                    width: 6.5625rem;
                    height: 9.375rem;
                    margin-top: .9375rem;
                    margin-left: .625rem;
                }
            }
            .txt {
                float: right;
                height: 100%;
                width: 65%;
                color: #e0e0e0;
                h2 {
                    // 30px
                    height: 1.875rem;
                    font-size: 1.125rem;
                    line-height: 1.875rem;
                    margin-top: .9375rem;
                    color: #ffffff;
                }
                .movie_english {
                    height: 1rem;
                    line-height: 1rem;
                    font-size: .75rem;
                }
                .type {
                    // 25px
                    height: 1.5625rem;
                    line-height: 1.5625rem;
                    font-size: .875rem;
                }
                .actor_name {
                    height: 1.5625rem;
                    line-height: 1.5625rem;
                    font-size: .875rem;
                }
                .date {
                    height: 1.5625rem;
                    line-height: 1.5625rem;
                    font-size: .75rem;
                }
                .is_want {
                    width: 100%;
                    height: 1.5625rem;
                    margin-top: .3125rem;
                    span {
                        display: inline-block;
                        width: 45%;
                        height: 100%;
                        border-radius: .3125rem;
                        i {
                            float: left;
                            width: 1rem;
                            height: 1rem;
                            margin-left: 1.5rem;
                            margin-top: .3125rem;
                            background-size: 1rem 1rem;
                        }
                        p {
                            float: right;
                            width: 50%;
                            height: 1.5625rem;
                            line-height: 1.5625rem;
                            color: #ffffff;
                            font-size: 1rem;
                            text-align: left;
                            margin-right: 0.5rem;
                        }
                    }
                    .colorActive {
                        background: rgba(0, 0, 0, .4);
                        margin-left: 0.2rem;
                    }
                    .colorActiveCopy {
                        background: rgba(0, 0, 0, .4);
                        margin-left: 0.5rem;
                    }
                    .bkActive {
                            background-image: url('../../../assets/imgs/want-to-watch-red.png');
                        }
                    .want {
                        background: rgba(255, 255, 255, .4);
                        margin-left: 0.2rem;
                        .i {
                            background-image: url('../../../assets/imgs/want-to-watch.png');
                        }
                    }
                    .over {
                        background: rgba(255, 255, 255, .4);
                        margin-left: 0.5rem;
                        i {
                            background-image: url('../../../assets/imgs/star.png');
                        }
                    }
                }
            }
        }
        .share {
            position: relative;
            width: 90%;
            background-color: rgba(255, 255, 255, .1);
            height: 2.5rem;
            margin-left: 1.125rem;
            border-radius: .625rem;
            margin-bottom: 0.5rem;
            span {
                position: absolute;
                left: 1rem;
                top: 0;
                width: 50%;
                height: 2.5rem;
                line-height: 2.5rem;
                font-size: .8125rem;
                color: white;
            }
            img {
                position: absolute;
                left: 15rem;
                top: 0.8rem;
                width: 0.8rem;
                height: 0.8rem;
            }
            p {
                position: absolute;
                right: 0rem;
                top: 0;
                width: 20%;
                height: 2.5rem;
                line-height: 2.5rem;
                font-size: .8125rem;
                color: white;
            }
        }
        .footer {
            background-color: rgba(0, 0, 0, .3);
            width: 90%;
            // 40px
            height: 2.5rem;
            margin-left: 1.125rem;
            border-radius: .625rem;
            i {
                float: left;
                width: 1.25rem;
                height: 1.25rem;
                margin-top: .625rem;
                margin-left: .3125rem;
                background: yellow;
            }
            p {
                float: left;
                width: 25%;
                height: 2.5rem;
                line-height: 2.5rem;
                font-size: .8125rem;
                margin-left: .3125rem;
                color: #ffffff;
            }
            .people {
                margin-left: 4.6875rem;
                font-size: .6875rem;
                text-align: right;
            }
            .num {
                float: right;
                width: 16%;
                height: 2.5rem;
                line-height: 2.5rem;
                color: #ff6000;
                font-weight: 600;
                text-align: center;
            }

        }

    }
</style>