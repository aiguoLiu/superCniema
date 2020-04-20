<template>
    <div id="movie">
        <Header>
            <h1 slot="text">超级电影</h1>
            <i class="iconfont" slot="right" @click="isShow = !isShow">&#xe71b;</i>
        </Header>
        <div class="windows" 
            v-if="isShow" >
            <div>首页</div>
            <div>电影</div>
            <div>影院</div>
            <div>榜单</div>
            <div>热点</div>
            <div>商城</div>
        </div>
        <div class="page">
            <Swiper/>
            <top></top>
            <div class="kongge"></div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <Topbar/>
        <!-- 命名视图 -->
        <router-view name="detail"/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'

import Swiper from './child/swiper'
import Top from './child/top'

export default {
    name: 'Movie',
    data() {
        return {
            isShow: false
        }
    },
    components: {
        Header,
        Swiper,
        Top,
        Topbar
    },
    mounted() {
        // 点击页面任何位置让弹框消失
        // let _this = this
        // document.addEventListener('click', (e) => {
        //     if(e.target.className != 'windows'){
        //         _this.isShow = false
        //     }
        // })
    },
    methods: {
       
    }
}
</script>

<style lang="scss" scoped>
    // * {
    //     margin: 0;
    //     padding: 0;
    // }
    #movie {
        h1 {
            display: inline-block;
            margin-left: 33.33%;
            width: 33.333%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: 600;
        }
        i {
            float: right;
            font-size: 1.875rem;
            text-align: right;
            margin-right: .9375rem;
            margin-top: .5rem;
        }
        .windows {
            position: fixed;
            top: 2.75rem;
            right: 1.5625rem;
            width: 6.125rem;
            background: #ffffff;
            z-index: 100;
            box-shadow: 3px 3px 5px #e0e0e0;
            div:last-child{
                border-bottom: none;
            }
            div {
                width: 100%;
                height: 2.5625rem;
                line-height: 2.5625rem;
                text-align: center;
                color: #999999;
                font-weight: 600;
                border-bottom: 0.5px solid #e0e0e0;
            }
        }
        .page {
            width: 100%;
            height: 33.35rem;
            margin-top: 3.125rem;
            overflow: hidden;
            .kongge {
                width: 100%;
                height: .625rem;
                background-color: #e0e0ee;
            }
        }
    }
</style>