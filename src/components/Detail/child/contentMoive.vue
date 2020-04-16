<template>
    <div class="content_movie">
        <div class="text_top">
            <span class="synopsis">演职人员</span>
            <span class="unfold">
                <p>全部</p>
                <i class="iconfont">&#xe641;</i>
            </span>
        </div>
        <div class="movie_title">
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/fonts.css';
    * {
        margin: 0;
        padding: 0;
    }
    .content_movie {
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
                    transform: rotate(-180deg);
                    font-size: .625rem;
                }
            }
        }
    }
</style>