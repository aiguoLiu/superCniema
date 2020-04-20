<template>
    <div class="content_text" >
        <div class="text_top">
            <span class="synopsis">简介</span>
            <span class="unfold" @click="handleClick">
                <p v-show="isShowCopy">收起</p>
                <p v-show="isShow">展开</p>
                <i class="iconfont" :style="{transform:isTran?'rotate(90deg)':'rotate(-90deg)'}">&#xe641;</i>
            </span>
        </div>
        <div class="text_txt" :style="{height:heights?'10.875rem':'6.875rem'}">
            <p :style="{height:heights?'10.875rem':'6.875rem'}">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentText',
    data() {
        return {
            heights: false,
            isShowCopy: false,
            isShow: true,
            isTran: false,
            text: '《剧场版 鬼灭之刃 无限列车篇》（日语：劇場版「鬼滅の刃」無限列車編）是由吾峠呼世晴的漫画《鬼灭之刃》中的同名篇章改编，由ufotable制作的一部剧场版动画。 在蝴蝶屋结束修业后，抵达了下一个任务之地「无限列车」。 这里，在短时间内有四十多人失踪，虽然派出去了数名剑士，但全员都失去了音讯。 带著祢豆子的炭治郎与善逸、伊之助一行人， 与鬼杀队的最强剑士「柱」之一的炎柱炼狱杏寿郎会合。 在通往黑暗的无限列车中，将面对潜伏在此的鬼。'
        }
    },
    methods: {
        handleClick() {
            this.isShow = !this.isShow
            this.isShowCopy = !this.isShowCopy
            this.heights = !this.heights
            this.isTran = !this.isTran
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
    .content_text {
        width: 100%;
        // 150px
        // height: 9.375rem;
        margin-top: .3125rem;
        .text_top {
            // 40px
            height: 2.5rem;
            color: #cccccc;
            .synopsis {
                float: left;
                width: 20%;
                height: 2.5rem;
                line-height: 2.5rem;
                text-align: center;
                font-size: .9375rem;
                color: #ffffff;
            }
            .unfold {
                float: right;
                width: 40%;
                height: 2.5rem;
                line-height: 2.5rem;
                p {
                    float: left;
                    width: 3.125rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    text-align: right;
                    margin-left: 3.75rem;
                    font-size: .75rem;
                }
                i {
                    float: right;
                    width: 1.25rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    text-align: center;
                    margin-right: .625rem;
                    transition: 0.4s;
                    font-size: .625rem;
                }
            }
        }
        .text_txt {
            overflow: hidden;
            p {
                display: block;
                width: 90%;
                margin-left: 1.2rem;
                color: white;
                font-size: .75rem;
                line-height: 1.4rem;
            }
        }
    }
</style>