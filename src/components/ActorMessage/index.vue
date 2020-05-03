<template>
    <div id="actor">
        <div class="box" v-for="(item,index) in actorList" :key="index">
            <img :src="item.maxImgs" alt="">
            <div class="actor_bar">
            <i class="iconfont" @click="backClick">&#xe641;</i>
            <span>明星百科</span>
            </div>
            <div class="actor_top">
                <div class="image">
                    <img :src="item.minImgs" alt="">
                </div>
                <div class="text">
                    <p class="name">{{ item.name }}</p>
                    <p class="birth">{{ item.birth }}</p>
                    <p class="address">{{ item.address }}</p>
                    <p class="introduce">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
        <div class="actor_content">
            <div class="text" style="height:2rem">
                <p style=" width: 35%; text-align: center;line-height:2rem; font-weight:600; color:#000;">相关影片</p>
            </div>
             <div class="container">
                 <ul>
                     <li v-for="(item, index) in image" :key="index">
                         <img :src="item.imgs" alt="">
                         <p class="text">{{ item.txt }}</p>
                     </li>
                 </ul>
             </div>
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
            actorList: [
                {
                    id: 1,
                    name: '张艺兴',
                    minImgs: require('../../assets/imgs/zhangyixingonemin.jpg'),
                    maxImgs: require('../../assets/imgs/zhangyixingone.jpg'),
                    birth: '1991年10月7日',
                    address: '出生于湖南省长沙市',
                    text: '中国内地流行乐男歌手、影视演员，韩国男子演唱组合EXO-M成员。2008年通过S.M. Casting System在中国的选拔成为韩国SM公司旗下练习生。2012年4月以EXO团体和其子队EXO-M成员身份正式出道'
                }
            ],
            image: [
                {
                    id: 1,
                    imgs: require('../../assets/imgs/qiuhundazuozhan.jpg'),
                    txt: '老九门'
                },
                {
                    id: 2,
                    imgs: require('../../assets/imgs/laojiumen.jpg'),
                    txt: '求婚大作战'
                },
                {
                    id: 3,
                    imgs: require('../../assets/imgs/qiyuan.jpg'),
                    txt: '祈愿'
                },
                {
                    id: 4,
                    imgs: require('../../assets/imgs/qiyuan.jpg'),
                    txt: ''
                },
                {
                    id: 5,
                    imgs: require('../../assets/imgs/laojiumen.jpg'),
                    txt: ''
                },
                {
                    id: 6,
                    imgs: require('../../assets/imgs/qiuhundazuozhan.jpg'),
                    txt: ''
                }
            ]
            
            
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
    #actor .box { position: relative; background-color: rgba(0, 0, 0, .3);}
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
    
    #actor .actor_content { width: 100%; height: 7.5rem; margin-top: 1rem;}
    #actor .actor_content .container { width: 100%; height: 100%; overflow: hidden;}
    #actor .actor_content .container ul {  display: flex; height: 100%; white-space: nowrap; overflow-y: hidden; overflow-x: scroll; }
    #actor .actor_content .container ul::-webkit-scrollbar { display: none; }
    #actor .actor_content .container ul li:first-child { margin-left: 1.8rem;}
    #actor .actor_content .container ul li:last-child { padding-right: 2.2rem;}
    #actor .actor_content .container ul li { position: relative;  width: 4.5rem; height: 100%; margin: 0 1.2rem;}
    #actor .actor_content .container ul li img {width: 4.8rem; height: 6.5rem; margin-top: .5rem; }
    #actor .actor_content .container ul li p { position: absolute; bottom: .5rem; width: 4.8rem; height: 1.5rem; line-height: 1.5rem; text-align: center; background-color: rgba(0, 0, 0, .6); font-size: .9rem; color:#ff6700;}
</style>