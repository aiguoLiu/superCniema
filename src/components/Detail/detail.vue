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

    },
    mounted() {
        console.log(this.movieId);
        
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
       
    }
</style>