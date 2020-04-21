<template>
    <div id="actor">
        <div class="box">
            <img src="../../assets/imgs/zhangyixingone.jpg" alt="">
            <div class="actor_bar">
            <i class="iconfont" @click="backClick">&#xe641;</i>
            <span>明星百科</span>
            </div>
            <div class="actor_top">
                <div class="image">
                    <img src="../../assets/imgs/zhangyixingonemin.jpg" alt="">
                </div>
                <div class="text">
                    <p class="name">张艺兴</p>
                    <p class="birth">1991年10月7日</p>
                    <p class="address">出生于湖南省长沙市</p>
                    <p class="introduce">
                        中国内地流行乐男歌手、影视演员，韩国男子演唱组合EXO-M成员。2008年通过S.M. Casting System在中国的选拔成为韩国SM公司旗下练习生。2012年4月以EXO团体和其子队EXO-M成员身份正式出道
                    </p>
                </div>
            </div>
        </div>
        <div class="actor_content">

        </div>
        <div class="actor_footer">

        </div>
    </div>
</template>

<script>
export default {
    name: 'ActorMessage',
    data() {
        return {

        }
    },
    methods: {
        backClick() {
            this.$router.back()
        }
    }
}
</script>

<style scoped>
@import '../../assets/css/fonts.css';
    * { padding: 0; margin: 0; }
    #actor { width: 100%; }
    #actor .box { position: relative;}
    #actor .box>img { position: absolute; width: 100%; height: 100%; z-index: -1; filter: blur(20px);}
    #actor .box .actor_bar { position: relative; height: 3.125rem; border-bottom: 1px solid #fff;}
    #actor .box .actor_bar i { position: absolute; left: 0; width: 3.125rem; height: 3.125rem; line-height: 3.125rem; font-size: 1.6rem; color: #fff; text-align: center;}
    #actor .box .actor_bar span { position: absolute; left: 4rem; width: 40%; line-height: 3.125rem; color: #fff; font-size: 1.2rem; font-weight: 600;}
    #actor .box .actor_top { position: relative; height: 12.5rem; }
    #actor .box .actor_top .image { position: absolute; top: 1.2rem; left: .5rem; width: 8rem; height: 10rem;}
    #actor .box .actor_top .image img { width: 8rem; height: 10rem;}
    #actor .box .actor_top .text { position: absolute; top: 0; right: .5rem; width: 55%; height: 100%; font-size: .875rem;}
    #actor .box .actor_top .text p:nth-child(-n+3) { line-height: 1.875rem; color: #000; font-weight: 600;}
    #actor .box .actor_top .text p:first-child { margin-top: .7rem; }
    #actor .box .actor_top .text p:last-child { color: #000; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;}
</style>