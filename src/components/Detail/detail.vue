<template>
    <div class="detail">
        <!-- <Scroller style="height: 39.4rem"> -->
            <div>
                <div class="detail_copy">
                    <div class="bc">
                        <ContentTop/>
                        <ContentText/>
                        <ContentActor/>
                        <!-- <ContentMoive/> -->
                        <div class="content_photo">

                        </div>
                    </div>
                </div>
                <AboutMoive/>
                <div id="fixed" :class="{fixedHover:isClick}" @click="handleClick">
                    <a href="javascript:;">立即购票</a>
                </div>
            </div>
        <!-- </Scroller> -->
    </div>
</template>

<script>
import ContentTop from './child/contentTop'
import ContentText from './child/contentText'
import ContentActor from './child/contentActor'
import ContentMoive from './child/contentMoive'
import AboutMoive from './child/aboutMoive'

export default {
    name: 'Detail',
    data() {
        return {
            isClick: false
        }
    },
    // 接受到传过来的id
    props: ['movieId'],
    components: {
        ContentTop,
        ContentText,
        ContentActor,
        ContentMoive,
        AboutMoive
    },
    methods: {
        handleClick() {
            this.isClick = !
            this.isClick
        }
    },
    mounted() {
        // console.log(this.movieId);
        
    }
}
</script>

<style lang="scss" scoped>
    .detail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        background-color: white;
        z-index: 100;
        animation: .25s animate;
        @keyframes animate {
            0% {
                transform : translateX(100%);
            }
            100% {
                transform : translateX(0);
            }
        }
        .detail_copy {
            background-color: #663E3F;
            .bc {
            background-color:rgba(255, 255, 255, .1);
            } 
        }
       #fixed {
           position: fixed;
           bottom: 5rem;
           right: 1rem;
           width: 5rem;
           height: 2.5rem;
           background-color: rgba(253, 171, 19,.8);
        //    box-shadow: 0 5px 7px rgba(200, 200, 200, .8);
           border-radius: .625rem;
           a {
               display: block;
               width: 100%;
               height: 2.5rem;
               font-size: 1rem;
               line-height: 2.5rem;
               color: yellow;
                text-align: center;
                font-weight: 600;
           }
       }
       .fixedHover {
           animation: .5s cute;
       }
       @keyframes cute {
           0%,100% {
               transform: scale(1,1);
           }
           25%,75% {
               transform: scale(1.1,.9);
           }
           50% {
               transform: scale(.9,1.1);
           }
       }
    }
</style>