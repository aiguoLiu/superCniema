<template>
    <div class="content_text">
        <div class="text_top">
            <span class="synopsis">简介</span>
            <span class="unfold">
                <p>展开</p>
                <i class="iconfont">&#xe641;</i>
            </span>
        </div>
        <div class="text_txt">

        </div>
    </div>
</template>

<script>
export default {
    name: 'contentText'
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
        height: 9.375rem;
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
                    transform: rotate(-90deg);
                    font-size: .625rem;
                }
            }
        }
        .text_txt {
            height: 6.875rem;
            background: yellow;
        }
    }
</style>